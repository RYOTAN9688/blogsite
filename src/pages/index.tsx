import { NextPage } from 'next';
import { TopTemplate } from '../template/TopTemplate';

const Home: NextPage = () => {
  return (
    <TopTemplate
      title='Home'
      description='爆速で動くportfolioサイトです'
      type='Website'
      url='https://portfolio-sigma-lime.vercel.app/'
    />
  );
};

export default Home;
