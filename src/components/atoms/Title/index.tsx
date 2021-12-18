import { VFC } from 'react';
import Link from 'next/link';

interface TitleProps {
  title: string;
}
export const Title: VFC<TitleProps> = (props: TitleProps) => {
  const { title } = props;

  return (
    <Link href='/'>
      <a className='ml-3 text-3xl cursor-pointer  text-white md:mb-0 font-fancy '>{title}</a>
    </Link>
  );
};
