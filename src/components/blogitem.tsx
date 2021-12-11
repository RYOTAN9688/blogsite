import Link from 'next/link';
import Image from 'next/image';

interface Props {
  blogUrl: string;
  blogTitle: string;
  blogDescription: string;
  blogThumbnail: string;
  date?: string;
}

export const Blogitem: React.VFC<Props> = ({
  blogUrl,
  blogTitle,
  blogDescription,
  blogThumbnail,
  date,
}) => {
  return (
    <div className='shadow-xl cursor-pointer transition duration-100  ease-linear transform hover:scale-95 hover:shadow-lg flex flex-col items-center py-4 '>
      <Link href={blogUrl}>
        <a aria-label='ブログ記事に飛ぶ'>
          <Image
            src={blogThumbnail}
            width={200}
            height={200}
            alt='blog記事'
            className='w-full h-full object-cover inset-0 '
          />
        </a>
      </Link>
      <div>
        <h2 className='py-3-3'>
          <Link href={blogUrl}>
            <a className='font-bold text-xl hover:text-gray-400 '>{blogTitle}</a>
          </Link>
        </h2>
        <p className='pb-4'> {blogDescription}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
