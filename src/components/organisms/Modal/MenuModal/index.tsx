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
        className='flex flex-col items-center fixed bg-black  w-4/6 inset-0  z-50 overflow-hidden order-3 md:relative md:items-center md:w-auto  md:flex md:order-1'
      >
        <div className='md:flex  items-center py-8 justify-between text-base font-fancy md:pt-0 '>
          <Link href='/'>
            <a className='inline-block  no-underline text-white hover:text-gray-400  py-2 px-4 '>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='inline-block no-underline text-white hover:text-gray-400  py-2 px-4'>
              Blog
            </a>
          </Link>
          <nav className='py-2 flex items-center'>
            <Link href='/' locale='ja'>
              <a className='inline-block  no-underline text-white hover:text-gray-400  py-2 px-4 '>
                Ja
              </a>
            </Link>
            <div className='text-white'>/</div>
            <Link href='/en' locale='en'>
              <a className='inline-block  no-underline text-white hover:text-gray-400  py-2 px-4 '>
                En
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
