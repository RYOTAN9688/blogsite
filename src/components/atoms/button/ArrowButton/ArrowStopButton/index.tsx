import { VFC } from 'react';
import { StopCircleOutlined } from '@mui/icons-material';
import styled from 'styled-components';

import { ArrowProps, Props } from '../types';

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

export const ArrowStopButton: VFC<Props> = ({ onClick, direction, playState }) => {
  return (
    <Arrow onClick={onClick} direction={direction} playState={playState}>
      <StopCircleOutlined />
    </Arrow>
  );
};
