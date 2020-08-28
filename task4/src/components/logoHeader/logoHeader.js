import React from 'react';
import './logoHeader.scss';
import Button from '../../utils/button/button';
import Logo from '../../utils/logo/logo';

function LogoHeader() {
  return (
    <div className="logo-header">
      <Logo/>
      <h1><span>Netflix</span>roullete</h1>
      <Button color="secondary">ADD MOVIE</Button>
    </div>
  );
}

export default LogoHeader;
