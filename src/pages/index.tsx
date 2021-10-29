import { Header } from '../components/Header';
import Profile from '../components/Profile';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  return (
    <div>
      <Header title='Home' />
      <Profile />
    </div>
  );
}
