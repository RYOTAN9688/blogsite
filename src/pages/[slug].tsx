import { GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { BlogLayout } from '../layouts/BlogLayout';
import { getNotionData, getPage, getBlocks } from '../../lib/getNotionData';

import { PageHead } from '../components/PageHead';
import { CodeBlock } from '../components/notion/codeBlock';
import { Fragment } from 'react';

const databaseId = process.env.NOTION_DATABASE_ID;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug, page, blocks }: Props) {
  return (
    <>
      <PageHead
        title='BlogContent'
        description='Blogの内容が書いてあります'
        type='artcle'
        url='https://portfolio-sigma-lime.vercel.app/blog'
      />
      <BlogLayout>
        <span className='text-sm text-gray-700'>
          {new Date(page.created_time).toLocaleString('ja-JP-u-ca-japanese', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </span>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-5 text-black'>{slug}</h1>
        {blocks.map((block) => {
          <Fragment key={block.id}>{CodeBlock(block)}</Fragment>;
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
    fallback: 'blocking',
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
    revalidate: 3600,
  };
};
