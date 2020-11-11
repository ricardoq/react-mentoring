import React from 'react';
import loadable from '@loadable/component';
import './logoHeader.scss';
import useShowModal from '../../utils/hooks/useShowModal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Button = loadable(() => import('../../utils/button/button'));
const Logo = loadable(() => import('../../utils/logo/logo'));
const EditMovie = loadable(() => import('../editMovie/editMovie'));

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

export default React.memo(LogoHeader);
