import React from 'react';
import './modal.scss';
import PropTypes from 'prop-types';

// PATTERN: RENDER PROP
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

Modal.propTypes= {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default React.memo(Modal);
