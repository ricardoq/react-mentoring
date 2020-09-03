import React, {useState} from 'react';
import './logoHeader.scss';
import Button from '../../utils/button/button';
import Logo from '../../utils/logo/logo';
import EditMovie from '../editMovie/editMovie';

function LogoHeader() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => (setShowModal(!showModal));

  return (
    <div className="logo-header">
      <Logo/>
      <Button color="secondary" onClick={toggleModal}>ADD MOVIE</Button>
      <EditMovie isOpen={showModal} getsClosed={toggleModal} />
    </div>
  );
}

export default LogoHeader;
