import Head from 'next/head';
import Link from 'next/link';

export const Header = ({ title = '' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className='container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center bg-white'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-5xl'>PortFolio</span>
          </a>
          <nav>
            <Link href='/'>
              <a className='mr-5 hover:text-gray-900 hover:underline text-xl '>Home</a>
            </Link>
            <Link href='/blog'>
              <a className='mr-5 hover:text-gray-900 hover:underline text-xl'>Blog</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
