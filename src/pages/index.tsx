import Container from '../components/Container';
import Profile from '../components/Profile';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}
