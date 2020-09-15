import React from 'react';
import './modal.scss';
import PropTypes from 'prop-types';

function Modal({children, close,className}) {
  return <>
    <div className="modal-container">
      <div className="back-shadow"/>
      <div className={`modal-body ${className || ''}`}>
        <div className="modal-header">
          <button onClick={close}>X</button>
        </div>
        {children}
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
