import { Header } from './organisms/Header';
import { Footer } from './organisms/Footer';
import { ReactChild } from 'react';

interface Props {
  children?: ReactChild;
  title?: string;
  description?: string;
}

export default function Container(props: Props) {
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
}
