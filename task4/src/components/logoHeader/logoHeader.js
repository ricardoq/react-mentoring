import React from 'react';
import './logoHeader.scss';
import Button from '../../utils/button/button';
import Logo from '../../utils/logo/logo';
import EditMovie from '../editMovie/editMovie';

class LogoHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  toggleModal(value) {
    console.log(value || !this.state.showModal);
    this.setState({
      showModal: value || !this.state.showModal
    });
  }

  render() {
    return (
      <div className="logo-header">
        <Logo/>
        <Button color="secondary" onClick={this.toggleModal.bind(this)}>ADD MOVIE</Button>
        <EditMovie isOpen={this.state.showModal} getsClosed={this.toggleModal.bind(this, false)} />
      </div>
    );
  }
}

export default LogoHeader;
