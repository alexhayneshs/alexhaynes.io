import React, { ReactNode } from 'react';

import MainMenu from '@components/ui/MainMenu';
import Footer from '@components/ui/Footer';

import {
  LayoutWrapper
} from './Layout.styles'

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainMenu />
        {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
