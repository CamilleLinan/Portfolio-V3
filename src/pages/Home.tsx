import { FC } from 'react';
import Introduction from '../components/Home/Introduction/Introduction';
import DisplayProjects from '../components/Home/DisplayProjects/DisplayProjects';

const Home: FC = () => {
  return (
    <>
      <Introduction />
      <DisplayProjects />
    </>
  );
};

export default Home;