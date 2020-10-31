import React from 'react';
import style from './modal.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Modal({children, close,className}) {
  return <>
    <div className={style.modalcontainer}>
      <div className={style.backshadow}/>
      <div className={classNames(style.modalbody, className || '')}>
        <div className={style.modalheader}>
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

export default Modal;
