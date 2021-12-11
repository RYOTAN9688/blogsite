import { VFC } from 'react';
import Image from 'next/image';

import { otherSkilldata, skilldata } from './data/Skilldata';

const skills = skilldata;

export const Skills: VFC = () => {
  return (
    <>
      <h1 className='font-bold text-4xl pb-3 text-red-500 '>Skills</h1>
      <div className='grid grid-cols-2 gap-3 flex-wrap  '>
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <div className='flex mb-5 items-center bg-gray-100 w-32  md:w-64 shadow-md  transition hover:scale-100 hover:shadow-lg '>
                <Image src={skill.image} alt={skill.alt} width={50} height={50} loading={'eager'} />
                <h2 className='font-bold text-gray-800 pl-1 '>{skill.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className='font-bold text-4xl pb-3 text-red-500'>OtherSkills</h1>
      <div className='grid grid-cols-2 gap-3 flex-wrap'>
        {otherSkilldata.map((otherSkill, index) => {
          return (
            <div key={index}>
              <h2 className='font-bold text-base'>{otherSkill.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
