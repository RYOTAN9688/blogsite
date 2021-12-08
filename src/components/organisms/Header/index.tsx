import { useState, VFC } from 'react';
import { TitleIcon } from '../../../svgs/Title';
import { HeaderTitle } from '../../atoms/HeaderTitle';
import { Modal } from '../Modal/MenuModal';

export const Header: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const memuFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='container  mx-auto text-gray-300 py-2'>
        <div className='container relative flex justify-between md:flex text-gray-300 py-2 '>
          <div className='flex items-center  md:flex'>
            <TitleIcon />
            <HeaderTitle />
          </div>
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
          <nav>
            <div className={`${isOpen ? 'absolute' : 'hidden md:flex '}`}>
              <Modal />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
