import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export const Header = ({ title = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const memuFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className='container mx-auto text-gray-300 py-2 '>
        <div className='flex justify-between items-center'>
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
          <div>
            <button className='px-5 md:hidden' onClick={memuFunction}>
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
        </div>
        <nav className={`${isOpen ? 'flex flex-col' : 'hidden md:flex justify-center'}`}>
          <Link href='/'>
            <a className='mr-5  hover:text-gray-900 hover:underline text-xl py-2 px-8'>Home</a>
          </Link>
          <Link href='/blog'>
            <a className='mr-5 hover:text-gray-900 hover:underline text-xl py-2 px-8'>Blog</a>
          </Link>
        </nav>
      </header>
    </>
  );
};
