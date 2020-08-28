import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

function Button(props) {
  const buttonStyle = `${(props.color || 'primary')} ${props.className || ''}`;
  return (<button className={buttonStyle}>{props.children}</button>
  );
}

Button.protoTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default Button;
