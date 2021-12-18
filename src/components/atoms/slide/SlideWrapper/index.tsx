import { VFC } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  slideIndex: number;
  children?: React.ReactNode;
}

const StyledSlider = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`;
export const SliderContent: VFC<WrapperProps> = ({ slideIndex, children }) => {
  return <StyledSlider slideIndex={slideIndex}>{children}</StyledSlider>;
};
