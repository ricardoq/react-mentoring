import React, { useContext } from 'react';
import './logoHeader.scss';
import Button from '../../utils/button/button';
import Logo from '../../utils/logo/logo';
import EditMovie from '../editMovie/editMovie';
import useShowModal from '../../utils/hooks/useShowModal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { MovieContext } from '../../utils/contexts/movieContext';

function LogoHeader({isOnDetail}) {
  const [showModal, toggleModal] = useShowModal();
  const {changeMovie} = useContext(MovieContext);

  return (
    <div className="logo-header">
      <Logo/>
      {
        isOnDetail ?  (
          <Button className="circle" onClick={() => {changeMovie(null)}}>
            <FontAwesomeIcon icon={faSearch}/>
          </Button> ) :
        ( <>
            <Button color="secondary" onClick={toggleModal}>ADD MOVIE</Button>
            <EditMovie isOpen={showModal} getsClosed={toggleModal}/>
          </>)
      }
    </div>
  );
}

LogoHeader.protoTypes = {
  isOnDetail: PropTypes.bool,
}

export default LogoHeader;
