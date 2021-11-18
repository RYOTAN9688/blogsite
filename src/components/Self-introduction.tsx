import Image from 'next/image';
import { useLocale } from '../hooks/useLacale';
export const Self_introduction = () => {
  const { t } = useLocale();
  return (
    <>
      <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r-2 md:border-b-0 mb-10 md:mb-0 pb-6   border-blue-500  flex items-center flex-col'>
        <Image
          src='/profile.jpg'
          width={200}
          height={200}
          loading={'eager'}
          alt='プロフィール画像'
          className='rounded-r-full rounded-t-full rounded-b-full'
        />
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>About</h1>
        <p className='leading-relaxed text-base  pl-2'>{t.About}</p>
        <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>HOBBY</h2>
        <ul>
          <li className='font-medium '>{t.HobbyTitle1}</li>
          <li>{t.HobbyContent1}</li>
          <li className='font-medium  pt-3'>{t.HobbyTitle2}</li>
          <li>{t.HobbyContent2}</li>
        </ul>
      </div>
    </>
  );
};
