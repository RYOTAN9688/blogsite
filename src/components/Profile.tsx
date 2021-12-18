import { VFC } from 'react';
import { Self_introduction } from './Self-introduction';
import { Skills } from './Skill';

export const Profile: VFC = () => {
  return (
    <>
      <div>
        <section className='text-gray-600  font-fancy body-font'>
          <div className='container flex flex-wrap px-5 py-3 mx-auto items-center'>
            <Self_introduction />
            <div className='flex flex-col md:w-1/2 md:pl-12 '>
              <Skills />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
