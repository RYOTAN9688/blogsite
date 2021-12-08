import Container from '../components/Container';
import { PageHead } from '../components/PageHead';
import { Profile } from '../components/Profile';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  return (
    <>
      <PageHead
        title='TopPage'
        description='爆速で動くportfolioサイトです'
        type='website'
        url='https://portfolio-sigma-lime.vercel.app/'
      />
      <Container classname='animate-color-change-2x'>
        <Profile />
      </Container>
    </>
  );
}
