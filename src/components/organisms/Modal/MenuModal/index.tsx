import { VFC } from 'react';
import Link from 'next/link';

interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: React.ChangeEvent<HTMLInputElement>;
}
export const Modal: VFC<Props> = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={closeModal}
        className='bg-gray-900 font-fancy fixed w-4/6  inset-0 z-50 overflow-hidden md:relative  md:w-full md:h-full'
      >
        <div className='flex flex-col py-8 justify-center items-center   md:py-0 md:flex  '>
          <Link href='/'>
            <a className='text-white mr-5text-gray-900 hover:text-blue-500  hover:underline text-xl py-2  font-bold md:py-0 '>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className=' text-white  hover:text-blue-500 hover:underline text-xl py-2  font-bold'>
              Blog
            </a>
          </Link>
          <nav className='py-2 flex items-center'>
            <Link href='/' locale='ja'>
              <a className='text-xl text text-white hover:text-blue-500  font-bold'>Ja</a>
            </Link>
            <div className='text-white'>/</div>
            <Link href='/en' locale='en'>
              <a className='text-xxl text-white hover:text-blue-500  font-bold'>En</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
