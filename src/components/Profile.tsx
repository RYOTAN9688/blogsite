import Image from 'next/image';
import OtherSite from '../components/OtherSites';
import { Self_introduction } from './Self-introduction';
import { SkillGraph } from './SkillGraph';

export default function Profile() {
  return (
    <>
      <div className='flex flex-wrap  container mx-auto'>
        <div className='flex flex-col  items-center py-24 bg-gray-500'>
          <div>
            <Image
              className='rounded-r-full rounded-t-full rounded-b-full '
              src='/profile.jpg'
              width={200}
              height={200}
              loading='eager'
              objectFit='cover'
            />
          </div>
          <OtherSite />
          <Self_introduction />
        </div>
        <SkillGraph />
      </div>
    </>
  );
}
