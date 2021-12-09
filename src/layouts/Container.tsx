import { ReactChild } from 'react';

import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';

interface Props {
  children?: ReactChild;
  title?: string;
  description?: string;
  classname?: string;
  date?: Date;
  type?: string;
}

const Container = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main id='skip' className='px-4 '>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Container;
