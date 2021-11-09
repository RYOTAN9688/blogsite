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
    <div>
      <Link href={url}>
        <a>
          <Image src={image} width={200} height={200} alt='' loading={'eager'} />
        </a>
      </Link>
      <div>
        <h2 className='pt-3'>
          <Link href={url}>
            <a className='font-bold text-xl hover:text-gray-400 '>{title}</a>
          </Link>
        </h2>
        <p className='pt-1'> {description}</p>
      </div>
    </div>
  );
};
