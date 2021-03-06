import { GetStaticProps } from 'next';

import { PageHead } from '../hooks/SEO/PageHead';
import { BlogTemplate } from '../template/BlogTemplate';
import { getNotionData } from './api/getBlock';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNotionData();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
const BlogPage = ({ posts = [] }) => {
  return (
    <>
      <PageHead
        title='BlogPage'
        description='BlogPageです'
        type='artcle'
        url='https://portfolio-sigma-lime.vercel.app/blog'
      />
      <BlogTemplate BlogTitle='BlogPage' posts={posts} />
    </>
  );
};

export default BlogPage;
