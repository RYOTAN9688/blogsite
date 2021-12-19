import { VFC } from 'react';
import { Blogitem } from '../../components/organisms/blogItem';

import { Footer } from '../../components/organisms/Footer';
import { Header } from '../../components/organisms/Header';
import { Slider } from '../../components/organisms/Slider';

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
        <div className='w-full mx-auto mb-16 '>
          <title className='font-bold font-fancy text-3xl md:text-center w-full md:text-5xl tracking-tight mb-2 text-black mx-auto max-w-xl'>
            {BlogTitle}
          </title>
          <p className='pt-12 font-bold text-black font-fancy text-2xl border-b-4 border-gray-200  text-center'>
            {t.RecentblogPosts}
          </p>
          <Slider posts={posts} />
          <p className=' pt-12 font-bold text-black font font-fancy text-2xl  border-b-4 border-gray-200 text-center'>
            {t.blogPosts}
          </p>
          <div className='items-center md:pt-20 md:grid md:grid-cols-2 md:gap-4 md:flex-wrap md:space-x-8  '>
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
