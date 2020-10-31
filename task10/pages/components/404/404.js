import React from 'react';
import Logo from '../../utils/logo/logo';
// import error from '../../img/error.png';
import { Link } from "react-router-dom";
import style from './404.module.scss';

function NotFoundError() {
  return (
    <div className={style.notFound}>
      <div className={style.headerNotfound}><Logo/></div>
      <div className="body-notfound">
        <h2>Page Not Found</h2>
        <img src="/error.png" alt="404 error"/>
        <Link className={style.backBtn} to="/">GO BACK TO HOME</Link>
      </div>
    </div>
  );
}

export default NotFoundError;
