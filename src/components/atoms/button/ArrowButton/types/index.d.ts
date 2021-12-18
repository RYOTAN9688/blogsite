export interface Props {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  direction: string;
  playState?: boolean;
}

export interface ArrowProps {
  direction: string;
  playState?: boolean;
}
