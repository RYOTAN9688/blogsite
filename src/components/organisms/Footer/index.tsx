import Link from 'next/link';
import { VFC } from 'react';
import { OtherSites } from '../../OtherSites';

const othersite = OtherSites;

export const Footer: VFC = () => {
  return (
    <>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <Link href='/'>
            <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className='w-10 h-10'>
                <path d='M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z' />
              </svg>
              <span className='ml-3 text-xl'>PortFolio</span>
            </a>
          </Link>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © 2021 Copyright:
            <a
              href='https://twitter.com/knyttneve'
              className='text-gray-600 ml-1'
              rel='noopener noreferrer'
              target='_blank'
            >
              @Ryo
            </a>
          </p>
          <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            {othersite.map(({ Comp, link, alt }) => {
              return (
                <a key={link} href={link} aria-label={alt}>
                  <Comp height={30} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};
