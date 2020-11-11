import React from 'react';
import loadable from '@loadable/component';
import './footer.scss';

const Logo = loadable(() => import('../../utils/logo/logo'));

function Footer() {
  return (
    <div className="footer">
      <Logo/>
    </div>
  );
}

export default Footer;
