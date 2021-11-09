import { GetStaticProps } from 'next';

import { getNotionData } from '../../lib/getNotionData';

import { PageHead } from '../components/PageHead';
import { TopPage } from '../components/Toppage';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNotionData(process.env.NOTION_DATABASE_ID as string);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
export default function Home({ posts = [] }) {
  return (
    <>
      <PageHead
        title='BlogPage'
        description='BlogPageです'
        type='artcle'
        url='https://portfolio-sigma-lime.vercel.app/blog'
      />
      <TopPage posts={posts} />
    </>
  );
}
