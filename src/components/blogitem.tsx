import Link from 'next/link';
import Image from 'next/image';

interface Props {
  url: string;
  title: string;
  description: string;
  image: string;
}

export const Blogitem: React.VFC<Props> = ({ url, title, description, image }) => {
  return (
    <div className='shadow-xl cursor-pointer transition duration-100  ease-linear transform hover:scale-95 hover:shadow-lg flex flex-col items-center py-4 '>
      <Link href={url}>
        <a aria-label='ブログ記事に飛ぶ'>
          <Image
            src={image}
            loading='eager'
            priority
            width={200}
            height={200}
            alt='blog記事'
            className='w-full h-full object-cover inset-0 '
          />
        </a>
      </Link>
      <div>
        <h2 className='py-3-3'>
          <Link href={url}>
            <a className='font-bold text-xl hover:text-gray-400 '>{title}</a>
          </Link>
        </h2>
        <p className='pb-4'> {description}</p>
      </div>
    </div>
  );
};
