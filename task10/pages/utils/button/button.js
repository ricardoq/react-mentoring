import React from 'react';
import style from './button.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({children, color, className, onClick}) {
  const buttonStyle = classNames(style.button, (color || style.primary), className || '');
  return (<button className={buttonStyle} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
