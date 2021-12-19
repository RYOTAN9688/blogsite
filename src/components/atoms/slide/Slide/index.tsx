import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { sp } from '../../../../styles/media';

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
  ${sp`flex-flow:column`}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${sp`height:80%`}
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${sp`width:80%`}
  ${sp`padding:0`}
  ${sp`padding-top:10px`}
`;

const Title = styled.p`
  font-size: 70px;
  ${sp`font-size:30px`}
  ${sp`overflow-wrap: break-word`}
  ${sp`word-wrap: break-word`}
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  ${sp`margin:0`}
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
