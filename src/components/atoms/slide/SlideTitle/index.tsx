import { VFC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const SlideTitle: VFC<Props> = ({ children }) => {
  return <h1 className='text-7xl'>{children}</h1>;
};
