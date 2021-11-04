import { Footer } from './Footer';
import { Header } from './Header';

export default function Container(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main id='skip' className='px-4'>
        {children}
        <Footer />
      </main>
    </>
  );
}
