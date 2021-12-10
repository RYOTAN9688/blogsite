import { VFC } from 'react';
import { PageHead } from '../../components/PageHead';
import { Profile } from '../../components/Profile';
import Container from '../../layouts/Container';

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
      <Container classname='animate-color-change-2x'>
        <Profile />
      </Container>
    </>
  );
};
