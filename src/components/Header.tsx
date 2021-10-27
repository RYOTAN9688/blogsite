import Head from 'next/head';
// import { userRouter } from 'next/router';

const navItems: { label: string; page: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
];

export const Header = ({ title = '' }) => {
  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
    </header>
  );
};
