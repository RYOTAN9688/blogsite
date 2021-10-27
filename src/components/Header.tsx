import Head from 'next/head';
// import { userRouter } from 'next/router';
import Link from 'next/link';

const navItems: { label: string; page: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
];

export const Header = ({ title = '' }) => {
  return (
    <>
      <header>
        <Head>
          <title>{title}</title>
        </Head>
        <nav>
          {navItems.map(({ label, page }) => {
            <li key={label}>
              <Link href={page}>
                <a>{label}</a>
              </Link>
              ;
            </li>;
          })}
        </nav>
      </header>
    </>
  );
};
