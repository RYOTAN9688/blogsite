import { Self_introduction } from './Self-introduction';
import { Skills } from './Skill';

export default function Profile() {
  return (
    <>
      <div>
        <section className='text-gray-600 body-font'>
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
}
