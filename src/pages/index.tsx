import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div>
      <Header title='Home' />
      <Profile />
    </div>
  );
}
