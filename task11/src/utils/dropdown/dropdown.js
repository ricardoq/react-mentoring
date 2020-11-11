import React, {useState} from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

// PATTERN: RENDER PROP
function DropDown({label, placeholder, options, name, onChange, value}) {
  const [valueState, setValue] = useState(value);
  const updateValue = (e) => {
    setValue(e.target.value);
    onChange(e);
  };
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <select type="select"
              name={name}
              id={name}
              placeholder={placeholder}
              value={valueState}
              onChange={updateValue} >
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

DropDown.propTypes= {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default React.memo(DropDown);
