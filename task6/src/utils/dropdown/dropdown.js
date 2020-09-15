import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

function DropDown({label, placeholder, options, onChange, value}) {
  console.log(options, value);
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <select type="select"
             placeholder={placeholder}
             value={value}
             onChange={onChange} >
        {
          options.map((item, index) =>
          ( <option value={item.value} key={`${label}${index}`}>
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
