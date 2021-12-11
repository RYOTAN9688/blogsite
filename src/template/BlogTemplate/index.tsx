import { VFC } from 'react';

import { Blogitem } from '../../components/blogitem';
import { Footer } from '../../components/organisms/Footer';
import { Header } from '../../components/organisms/Header';
import { useLocale } from '../../hooks/useLacale';

import { PostProps } from '../../types';

export const BlogTemplate: VFC<{ BlogTitle: string; posts: PostProps[] }> = ({
  BlogTitle,
  posts,
}) => {
  const { t } = useLocale();
  return (
    <>
      <Header />
      <main id='skip' className='px-4 '>
        <div className='max-w-2xl mx-auto mb-16 '>
          <div className='mb-16'>
            <title className='font-bold font-fancy text-3xl md:text-center w-full md:text-5xl tracking-tight mb-2 text-black mx-auto max-w-xl'>
              {BlogTitle}
            </title>
            <p className='text-gray-700  pt-4 md:text-center max-w-xl mx-auto'>{t.BlogContent}</p>
          </div>

          <div className='md:grid md:grid-cols-2 md:gap-4 md:flex-wrap md:space-x-8 items-center '>
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <Blogitem
                    blogTitle={post.title}
                    blogDescription={post.description}
                    blogThumbnail={post.thumbnail}
                    blogUrl={`/${post.slug}`}
                    date={new Date(post.date).toLocaleString('ja-JP', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
