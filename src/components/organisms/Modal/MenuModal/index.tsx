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
    <div>
      <div
        onClick={closeModal}
        className='bg-white fixed w-3/6  inset-0 z-50 overflow-hidden md:relative md:w-full md:h-full '
      >
        <div className='flex py-8 justify-center flex-col items-center  md:flex md:py-0'>
          <Link href='/'>
            <a className='text-gray-900 mr-5text-gray-900 hover:text-blue-500  hover:underline text-xl py-2  font-bold md:py-0 '>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className=' text-gray-900  hover:text-blue-500 hover:underline text-xl py-2  font-bold'>
              Blog
            </a>
          </Link>
          <nav className='py-2'>
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
