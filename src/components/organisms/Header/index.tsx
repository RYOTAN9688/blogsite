import { useState, VFC } from 'react';
import { Title } from '../../atoms/Title';
import Link from 'next/link';
import { Modal } from '../Modal/MenuModal';

export const Header: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const memuFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black '>
      <header className='container w-full  mx-auto flex justify-between items-center text-white'>
        <Title title='MyPortfolio' />
        <button
          aria-label='ナビゲーションメニュー'
          className='px-5 bg-transparent md:hidden'
          onClick={memuFunction}
        >
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
                ? '-rotate-45 -translate-y-1 opacity-50  group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
        </button>
        <div className={`${isOpen ? 'absolute ' : 'hidden md:flex'}`}>
          <Modal setIsOpen={setIsOpen} />
        </div>
      </header>
    </div>
  );
};
