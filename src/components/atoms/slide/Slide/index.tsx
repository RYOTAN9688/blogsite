import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface SlideProps {
  blogUrl: string;
  blogTitle: string;
  blogDescription: string;
  blogThumbnail: string;
}

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const SlideTemlpete: VFC<SlideProps> = ({
  blogUrl,
  blogThumbnail,
  blogTitle,
  blogDescription,
}) => {
  return (
    <Link href={blogUrl}>
      <a aria-label='ブログ記事に飛ぶ'>
        <Slide>
          <ImgContainer>
            <Image src={blogThumbnail} alt='blog画像' />
          </ImgContainer>
          <InfoContainer>
            <Title>{blogTitle}</Title>
            <Desc>{blogDescription}</Desc>
          </InfoContainer>
        </Slide>
      </a>
    </Link>
  );
};
