import { VFC, memo } from 'react';
import styled from 'styled-components';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { ArrowProps, Props } from '../types';
import { sp } from '../../../../../styles/media';

const Arrow = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: ArrowProps) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 1;
`;

const Component: VFC<Props> = ({ onClick, direction, playState }) => {
  return (
    <Arrow onClick={onClick} direction={direction} playState={playState}>
      <ArrowBackIosOutlined />
    </Arrow>
  );
};

export const ArrowLeftButton = memo(Component);
