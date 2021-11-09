import { Post } from '../../types';
import { Blogitem } from './blogitem';
import Container from './Container';

export const TopPage: React.VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Container>
      <div className='max-w-2xl mx-auto mb-16'>
        <div className='mb-16'>
          <h1 className='font-bold text-3xl md:text-center w-full md:text-5xl tracking-tight mb-2 text-black mx-auto max-w-xl'>
            My Blog
          </h1>
          <p className='text-gray-700 mb-5 py-4 md:text-center max-w-xl mx-auto'>
            NotionAPIを使用したブログページを作成しました！
          </p>
        </div>
        <h2 className='font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8 text-black'>Blog</h2>
        <div className='md:grid grid-cols-2 grid-rows-3'>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Blogitem
                  title={post.title}
                  description={post.description}
                  image={post.thumbnail}
                  url={`/${post.slug}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
