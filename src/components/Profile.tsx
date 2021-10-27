import Image from 'next/image';
import OtherSite from '../components/OtherSites';

export default function Profile() {
  return (
    <>
      <div className='container px-20 py-20 mx-auto flex flex-wrap'>
        <div>
          <Image
            className='rounded-r-full rounded-t-full rounded-b-full '
            src='/profile.jpg'
            width='400'
            height='400'
          />
          <OtherSite />
        </div>
        <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h1 className='text-gray-900 text-lg title-font font-medium mb-3'>自己紹介</h1>
              <p className='leading-relaxed text-base'>
                1996年生まれ。石川生まれでずっと石川に住んでいます（地元愛💓）。
                フロントエンドエンジニアを目指して勉強中です。
              </p>
            </div>
          </div>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h1 className='text-blue-600 text-lg title-font font-black mb-3'>HOBBY</h1>
              <ul>
                <li className='font-medium'>音楽を聞くこと🎶</li>
                <p>
                  基本的になんでも聞きます。
                  学生のころは80年代、90年代の曲をよく聞いていてBOOWYが大好きでした。
                </p>
                <li className='font-medium'>ドライブ🚙</li>
                <p>
                  車を走らせることが好きなので、天気の良い日は海に行ったり、景色のいいところまでドライブします！！
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
