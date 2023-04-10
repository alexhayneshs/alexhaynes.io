import React from 'react';

import GlobalStyles from '@styles/GlobalStyles';
import Layout from '@components/ui/Layout';

import { AppWrapper } from './App.styles';
import Home from '@components/Home';

interface AppProps {
  /* prop1: type; */
}

const App: React.FC<AppProps> = () => {
  return (
    <AppWrapper>
        <>
        <GlobalStyles />
        <Layout>
          <Home />
        </Layout>
      </>
    </AppWrapper>
  );
};

export default App;
