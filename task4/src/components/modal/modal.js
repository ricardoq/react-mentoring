import React from 'react';
import './modal.scss';
import PropTypes from 'prop-types';

function Modal(props) {
  return <>
    <div className="modal-container">
      <div className="back-shadow"/>
      <div className={`modal-body ${props.className || ''}`}>
        <div className="modal-header">
          <button onClick={props.close}>X</button>
        </div>
        {props.children}
      </div>
    </div>
  </>
}

Modal.protoTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Modal;
