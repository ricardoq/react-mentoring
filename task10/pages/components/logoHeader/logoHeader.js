import React from 'react';
import style from './logoHeader.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import useShowModal from '../../utils/hooks/useShowModal';
import dynamic from "next/dynamic";

const Button = dynamic(import('../../utils/button/button'));
const Logo = dynamic(import('../../utils/logo/logo'));
const EditMovie = dynamic(import('../editMovie/editMovie'));

function LogoHeader({isOnDetail}) {
  const [showModal, toggleModal] = useShowModal();

  return (
    <div className={style.logoheader}>
      <Logo/>
      {
        isOnDetail ?
          <Link className={style.circle} to="/">
            <FontAwesomeIcon icon={faSearch}/>
          </Link> :
        ( <>
            <Button color="secondary" onClick={toggleModal}>ADD MOVIE</Button>
            <EditMovie isOpen={showModal} getsClosed={toggleModal}/>
          </>)
      }
    </div>
  );
}

LogoHeader.propTypes= {
  isOnDetail: PropTypes.bool,
}

export default LogoHeader;
