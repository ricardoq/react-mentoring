import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

function DropDown(props) {
  return (
    <div className="input-wrapper">
      <label>{props.label}</label>
      <select type="select"
             placeholder={props.placeholder}
             value={props.value}
             onChange={props.onChange} >
        {
          props.options.map((item, index) =>
          ( <option value={item.value} key={`${props.label}${index}`}>
              {item.label}
            </option>))
        }
      </select>
    </div>
  );
}

DropDown.protoTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default DropDown;
