import React from 'react';
import Logo from '../../utils/logo/logo';
import error from '../../img/error.png';
import { Link } from "react-router-dom";
import './404.scss';

function NotFoundError() {
  return (
    <div className="not-found">
      <div className="header-notfound"><Logo/></div>
      <div className="body-notfound">
        <h2>Page Not Found</h2>
        <img src={error} alt="404 error"/>
        <Link className="back-btn" to="/">GO BACK TO HOME</Link>
      </div>
    </div>
  );
}

export default NotFoundError;
