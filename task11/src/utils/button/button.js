import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

// PATTERN: RENDER PROP
function Button({children, color, className, onClick, id}) {
  const buttonStyle = `${(color || 'primary')} ${className || ''}`;
  return (<button id={id} className={buttonStyle} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
