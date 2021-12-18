import { VFC } from 'react';
import styled from 'styled-components';

const StyledImgContaner = styled.div`
  height: 100%;
  flex: 1;
`;
const StyledInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

interface Props {
  children: React.ReactNode;
}

export const ImgContainer: VFC<Props> = ({ children }) => {
  return <StyledImgContaner>{children}</StyledImgContaner>;
};

export const InfoContainer: VFC<Props> = ({ children }) => {
  return <StyledInfoContainer>{children}</StyledInfoContainer>;
};
