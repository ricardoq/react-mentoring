import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

function Button({children, color, className, onClick}) {
  const buttonStyle = `${(color || 'primary')} ${className || ''}`;
  return (<button className={buttonStyle} onClick={onClick}>{children}</button>
  );
}

Button.propTypes= {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
