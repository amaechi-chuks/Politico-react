import React from 'react';
import Header from '../../Components/Header/Header';

const Layout = () => {
  const navbar = [
    'Home',
    'Apply to contest',
    'Profile',
    'iew Candidates',
    'Log out',
  ];
  return (
    <React.Fragment>
      <Header navbar={navbar} />
    </React.Fragment>
  );
};

export default Layout;
