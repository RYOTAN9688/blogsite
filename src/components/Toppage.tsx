import { PostProps } from '../../types';
import { useLocale } from '../hooks/useLacale';
import { Blogitem } from './blogitem';
import Container from '../layouts/Container';

export const TopPage: React.VFC<{ posts: PostProps[] }> = ({ posts }) => {
  const { t } = useLocale();
  return (
    <Container>
      <div className='max-w-2xl mx-auto mb-16 '>
        <div className='mb-16'>
          <h1 className='font-bold text-3xl md:text-center w-full md:text-5xl tracking-tight mb-2 text-black mx-auto max-w-xl'>
            My Blog
          </h1>
          <p className='text-gray-700  pt-4 md:text-center max-w-xl mx-auto'>{t.BlogContent}</p>
        </div>

        <div className='md:grid md:grid-cols-2 md:gap-4 md:flex-wrap md:space-x-8 items-center '>
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
