import { VFC, useState, memo } from 'react';

import styled from 'styled-components';
import { PostProps } from '../../../types';

import { ArrowLeftButton } from '../../atoms/button/ArrowButton/ArrowLeftButton';
import { ArrowRightButton } from '../../atoms/button/ArrowButton/ArrowRightButton';
import { SlideTemlpete } from '../../atoms/slide/Slide';

interface WrapperProps {
  slideIndex: number;
}

interface Props {
  posts: PostProps[];
}

const Contaier = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`;

const SliderComponent: VFC<Props> = ({ posts }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Contaier>
        <ArrowLeftButton direction='left' onClick={() => handleClick('left')} />
        <Wrapper slideIndex={slideIndex}>
          {posts.map((post) => (
            <div key={post.id}>
              <SlideTemlpete
                blogTitle={post.title}
                blogDescription={post.description}
                blogThumbnail={post.thumbnail}
                blogUrl={`/${post.slug}`}
              />
            </div>
          ))}
        </Wrapper>
        <ArrowRightButton direction='right' onClick={() => handleClick('right')} />
      </Contaier>
    </>
  );
};

export const Slider = memo(SliderComponent);
