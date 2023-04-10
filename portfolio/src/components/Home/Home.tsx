import React from 'react';
import { HomeWrapper } from './Home.styles';

interface HomeProps {
  /* prop1: type; */
}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeWrapper>
      This is the Home Page
    </HomeWrapper>
  );
};

export default Home;
