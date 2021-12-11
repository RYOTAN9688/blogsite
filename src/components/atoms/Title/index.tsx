import { VFC } from 'react';

interface TitleProps {
  title: string;
}
export const Title: VFC<TitleProps> = (props: TitleProps) => {
  const { title } = props;

  return <h2 className='ml-3 text-3xl text-gray-900 md:mb-0 title-font '>{title}</h2>;
};
