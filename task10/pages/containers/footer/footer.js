import React from 'react';
import style from './footer.module.scss';
import Logo from '../../utils/logo/logo';

function Footer() {
  return (
    <div className={style.footer}>
      <Logo/>
    </div>
  );
}

export default Footer;
