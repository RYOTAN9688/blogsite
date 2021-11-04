import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const memuFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='container mx-auto text-gray-300 py-2 '>
        <div className='flex justify-between items-center'>
          <h1 className='flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className='w-10 h-10'>
              <path d='M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z' />
            </svg>
            <span className='ml-3 text-5xl'>PortFolio</span>
          </h1>
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
            <a className='mr-5 text-gray-900 hover:text-blue-500  hover:underline text-xl py-2 px-8'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='mr-5 text-gray-900  hover:text-blue-500 hover:underline text-xl py-2 px-8'>
              Blog
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
};
