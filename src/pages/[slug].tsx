import BlogLayout from '../layouts/BlogLayout';
import { getNotionData, getPage, getBlocks } from '../../lib/getNotionData';
import { Text, ListItem, Heading, ToDo, Toggle } from '../components/ContentBlock';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { PageHead } from '../components/PageHead';
const databaseId = process.env.NOTION_DATABASE_ID;

export default function Post({ page, blocks }) {
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
      <BlogLayout data={page}>
        <span className='text-sm text-gray-700'>
          {new Date(page.created_time).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </span>

        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-5 text-black'>
          {page.properties.Post.title[0].plain_text}
        </h1>

        {blocks.map((block) => {
          const { type, id } = block;
          const value = block[type];
          const { text } = value;

          switch (type) {
            case 'paragraph':
              return <Text text={value.text} id={id} key={id} />;

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
                  <Image alt={caption} src={imageSrc} width={480} height={320} />
                  {caption && <figcaption className='mt-2'>{caption}</figcaption>}
                </figure>
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
  const database = await getNotionData(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        //@ts-ignore
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params;
  const database = await getNotionData(databaseId);
  //@ts-ignore
  const filter = database.filter((blog) => blog.properties.Slug.rich_text[0].plain_text === slug);
  const page = await getPage(filter[0].id);
  const blocks = await getBlocks(filter[0].id);

  const childrenBlocks = await Promise.all(
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
      block[block.type].children = childrenBlocks.find((x) => x.id === block.id).children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 10,
  };
};
