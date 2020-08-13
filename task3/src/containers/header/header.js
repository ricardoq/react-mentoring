import React from 'react';
import './header.scss';
import LogoHeader from '../../components/logoHeader/logoHeader';
import Search from '../../components/search/search';

function Header() {
  return (
    <div className="header">
      <LogoHeader></LogoHeader>
      <Search/>
    </div>
  );
}

export default Header;
