import { VFC } from 'react';

import styled from 'styled-components';

interface SlideProps {
  children: React.ReactNode;
}

const StyledSlide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const SlideTemlpete: VFC<SlideProps> = ({ children }) => {
  return <StyledSlide>{children}</StyledSlide>;
};
