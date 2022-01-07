import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { BlogItemTemplate } from '../template/BlogItemTemplate';
import { NotionBlock } from '../types/notion';

import { getBlocks, getNotionData, getPage } from './api/getBlock';

type Props = {
  slug: string;
  page: any;
  blocks: NotionBlock[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getNotionData();
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;
  const posts = await getNotionData();
  const post = posts.find((post) => post.slug === slug);

  const page = await getPage(post!.id);
  const blocks = await getBlocks(post!.id);

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
    revalidate: 10,
  };
};

const BlogItemPage: NextPage<Props> = ({ slug, page, blocks }) => {
  return (
    <>
      <BlogItemTemplate
        blocks={blocks}
        slug={slug}
        page={page}
        pageTitle='BlogContent'
        pageDescription='Blogの内容が書いてあります'
        pageType='artcle'
        pageUrl='https://portfolio-sigma-lime.vercel.app/blog'
      />
    </>
  );
};

export default BlogItemPage;
