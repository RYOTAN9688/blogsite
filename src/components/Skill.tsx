import { SkillBar, Props } from './SkillBar';

const skill1: Props = {
  name: 'Git,GitHub',
  percentWidth: 'w-3/5',
  percent: 80,
  color: 'text-red-200',
};
const skill2: Props = {
  name: 'JavaScript',
  percentWidth: 'w-6/10',
  percent: 70,
  color: 'text-yellow-200',
};
const skill3: Props = {
  name: 'TypeScript',
  percentWidth: 'w-4/10',
  percent: 40,
  color: 'text-green-200',
};
const skill4: Props = {
  name: 'Next.js',
  percentWidth: 'w-4/10',
  percent: 40,
  color: 'text-blue-200',
};

const skills: Props[] = [skill1, skill2, skill3, skill4];

export const Skill = () => {
  return (
    <section>
      <div>
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <SkillBar
                name={skill.name}
                percentWidth={skill.percentWidth}
                percent={skill.percent}
                color={skill.color}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
