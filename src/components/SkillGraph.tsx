import { Bar } from 'react-chartjs-2';

import ChartData from './ChartData';

const options: any = {
  indexAxis: 'y',
  // scales: {
  //   xAxes: [
  //     {
  //       type: 'line',
  //       display: true,
  //       scaleLabel: {
  //         display: true,
  //       },
  //       ticks: {
  //         min: 0,
  //         max: 100,
  //       },
  //       gridLines: {
  //         display: false,
  //       },
  //     },
  //   ],
  //   yAxes: [
  //     {
  //       gridLines: {
  //         drawBorder: false,
  //       },
  //     },
  //   ],
  // },
  elements: {
    bar: {
      borderWidth: 5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const SkillGraph = () => {
  return (
    <div className='flex flex-col   px-20 '>
      <h1 className='text-blue-500 text-5xl'>SKILLS</h1>
      <div className='mx-auto  max-w-min py-5'>
        <Bar width={500} height={500} data={ChartData} options={options} />
      </div>
    </div>
  );
};
