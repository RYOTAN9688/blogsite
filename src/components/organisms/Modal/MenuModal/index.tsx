import { VFC } from 'react';
import Link from 'next/link';

interface Props {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: React.ChangeEvent<HTMLInputElement>;
}
export const Modal: VFC<Props> = ({}) => {
  return (
    <div>
      <div className=' bg-white fixed w-3/6  inset-0 z-50 overflow-hidden md:relative md:w-full md:h-full'>
        <div className='flex  py-8 justify-center flex-col md:flex'>
          <Link href='/'>
            <a className='text-gray-900 mr-5text-gray-900 hover:text-blue-500  hover:underline text-xl py-2 px-8 font-bold'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='mr-5 text-gray-900  hover:text-blue-500 hover:underline text-xl py-2 px-8 font-bold'>
              Blog
            </a>
          </Link>
          <nav className='py-2 px-8'>
            <Link href='/' locale='ja'>
              <a className='text-xl text-gray-900 hover:text-blue-500  font-bold'>Ja</a>
            </Link>
            /
            <Link href='/en' locale='en'>
              <a className='text-xxl text-gray-900 hover:text-blue-500  font-bold'>En</a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
