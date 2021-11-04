import Image from 'next/image';
import { skilldata } from './Skilldata';

const skills = skilldata;

export const Skills = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-3 flex-wrap  '>
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <div className='flex mb-5 items-center bg-gray-100 w-48  md:w-64  '>
                <Image src={skill.image} alt={skill.alt} width={50} height={50} />
                <h2 className='font-bold text-gray-800 pl-1 '>{skill.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
