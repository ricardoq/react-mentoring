import React from 'react';
import './logoHeader.scss';
import Button from '../../utils/button/button';
import Logo from '../../utils/logo/logo';
import EditMovie from '../editMovie/editMovie';
import useShowModal from '../../utils/hooks/useShowModal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function LogoHeader({isOnDetail}) {
  const [showModal, toggleModal] = useShowModal();

  return (
    <div className="logo-header">
      <Logo/>
      {
        isOnDetail ?
          <Link className="circle" to="/">
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
