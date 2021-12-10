import { GetStaticProps } from 'next';
import { getNotionData } from '../../lib/getNotionData';
import { PageHead } from '../components/PageHead';
import { BlogTemplate } from '../template/BlogTemplate';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNotionData(process.env.NOTION_DATABASE_ID as string);

  return {
    props: {
      posts,
    },
    revalidate: 3600,
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
