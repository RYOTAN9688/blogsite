import { GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Image from 'next/image';

import { BlogLayout } from '../layouts/BlogLayout';
import { getNotionData, getPage, getBlocks } from '../../lib/getNotionData';

import { Text, ListItem, Heading, ToDo, Toggle } from '../components/ContentBlock';
import { PageHead } from '../components/PageHead';
import { ParsedUrlQuery } from 'querystring';
import { CodeBlock } from '../components/atoms/CodeBlock';

const databaseId = process.env.NOTION_DATABASE_ID;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ page, blocks }: Props) {
  console.log(blocks);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <>
      <PageHead
        title='BlogContent'
        description='Blogの内容が書いてあります'
        type='artcle'
        url='https://portfolio-sigma-lime.vercel.app/blog'
      />
      <BlogLayout page={page}>
        <span className='text-sm text-gray-700'>
          {new Date(page.created_time).toLocaleString('ja-JP-u-ca-japanese', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </span>

        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-5 text-black'>{}</h1>

        {blocks.map((block) => {
          const { type, id } = block;
          const value = block[type];
          const { text } = value;

          switch (type) {
            case 'paragraph':
              return <Text text={value.text} id={id} key={id} />;

            case 'code':
              return <CodeBlock text={block.code.text} lang={block.code.language} />;
            case 'heading_1':
              return <Heading text={text} id={id} level={type} key={id} />;

            case 'heading_2':
              return <Heading text={text} id={id} level={type} key={id} />;

            case 'heading_3':
              return <Heading text={text} id={id} level={type} key={id} />;

            case 'bulleted_list_item':
            case 'numbered_list_item':
              return <ListItem key={id} text={value.text} id={id} />;

            case 'to_do':
              return <ToDo id={id} key={id} value={value} text={value.text} />;

            case 'toggle':
              return (
                <Toggle key={id} text={value.text}>
                  children={value.children}
                </Toggle>
              );

            case 'image':
              const imageSrc = value.type === 'external' ? value.external.url : value.file.url;
              const caption = value.caption.length ? value.caption[0].plain_text : '';
              return (
                <figure key={id}>
                  <Image alt={caption} src={imageSrc} width={420} height={360} quality={100} />
                  {caption && <figcaption className='mt-2'>{caption}</figcaption>}
                </figure>
              );

            case 'bookmark':
              return (
                <iframe
                  src={`/embed/?url=${block.bookmark.url}`}
                  className='w-full block border-0 h-36'
                ></iframe>
              );

            default:
              return `Unsupported block (${
                type === 'unsupported' ? 'unsupported by Notion API' : type
              })`;
          }
        })}
      </BlogLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getNotionData(databaseId as string);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
        id: post.id,
      },
    })),
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;
  const posts = await getNotionData(databaseId as string);
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return null;
  }
  const page = await getPage(post.id);
  const blocks = await getBlocks(post.id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      }),
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children) {
      block.children = childBlocks.find((x) => x.id === block.id)?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
      slug,
    },
    revalidate: 1,
  };
};
