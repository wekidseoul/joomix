import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
