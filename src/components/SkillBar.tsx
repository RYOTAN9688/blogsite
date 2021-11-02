export interface Props {
  name: string;
  percentWidth: string;
  percent: number;
  color: string;
}

export const SkillBar = ({ name, percentWidth, percent, color }: Props) => {
  return (
    <div className='relative'>
      <div className='flex items-center'>
        <div>
          <span className='inline-block text-base font-bold tracking-wider text-gray-500 '>
            {name}
          </span>
        </div>
      </div>
      <div className='grid grid-cols-10 text-left'>
        <div className='flex overflow-hidden col-span-8 mt-2 h-3 text-xs bg-bar-lightgreen rounded'>
          <div
            className={`${percentWidth} flex flex-col justify-center text-center text-white whitespace-nowrap bg-bar-green shadow-none`}
          ></div>
        </div>
        <div className='col-span-2 ml-3'>
          <span className='text-sm font-semibold text-text-green lg:text-base'>{percent}%</span>
        </div>
      </div>
    </div>
  );
};
