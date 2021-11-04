import Image from 'next/image';
import OtherSite from './OtherSites';
export const Self_introduction = () => {
  return (
    <>
      <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r-2 md:border-b-0 mb-10 md:mb-0 pb-6   border-blue-500  flex items-center flex-col'>
        <Image
          src='/profile.jpg'
          width={200}
          height={200}
          alt='プロフィール画像'
          className='rounded-r-full rounded-t-full rounded-b-full'
        />
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>About</h1>
        <p className='leading-relaxed text-base  pl-2'>
          1996年生まれ。石川生まれでずっと石川に住んでいます（地元愛💓）。
          フロントエンドエンジニアを目指して勉強中です。
        </p>
        <h2 className='title-font font-semibold text-2xl text-blue-500'>HOBBY</h2>
        <ul>
          <li className='font-medium '>音楽を聴くこと🎸</li>
          <p>
            基本的になんでも聞きます。
            学生のころは80年代、90年代の曲をよく聞いていてBOOWYが大好きでした。
          </p>
          <li className='font-medium  pt-3'>ドライブ🚙</li>
          <p>
            車を走らせることが好きなので、天気の良い日は海に行ったり、景色のいいところまでドライブします！！
          </p>
        </ul>
      </div>
    </>
  );
};
