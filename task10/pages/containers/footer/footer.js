import React from 'react';
import style from './footer.module.scss';
import dynamic from "next/dynamic";

const Logo = dynamic(import('../../utils/logo/logo'));

function Footer() {
  return (
    <div className={style.footer}>
      <Logo/>
    </div>
  );
}

export default Footer;
