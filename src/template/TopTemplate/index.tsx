import { VFC } from 'react';
import { Footer } from '../../components/organisms/Footer';
import { Header } from '../../components/organisms/Header';
import { PageHead } from '../../components/PageHead';
import { Profile } from '../../components/Profile';

export const databaseId = process.env.NOTION_DATABASE_ID;

interface Props {
  title: string;
  description: string;
  type: string;
  url: string;
}
export const TopTemplate: VFC<Props> = ({ title, description, type, url }) => {
  return (
    <>
      <PageHead title={title} description={description} type={type} url={url} />
      <Header />
      <main>
        <Profile />
      </main>
      <Footer />
    </>
  );
};
