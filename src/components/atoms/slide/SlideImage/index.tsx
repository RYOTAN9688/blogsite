import { VFC } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 100%;
`;

interface Props {
  blogThumbnail: string;
  alt: string;
}

export const Image: VFC<Props> = ({ blogThumbnail }) => {
  return <StyledImage src={blogThumbnail} alt='' />;
};
