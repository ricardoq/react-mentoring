import React, {useState, useEffect} from 'react';
import './input.scss';
import PropTypes from 'prop-types';

function Input({label, name, type, placeholder, onChange, value, errors}) {
  const [valueState, setValue] = useState(value);
  const updateValue = (e) => {
    setValue(e.target.value);
    onChange(e);
  };
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className="input-wrapper">
      <label for={name}>{label}</label>
      <input type={type || 'text'}
             name={name || ''}
             id={name}
             placeholder={placeholder}
             value={valueState}
             onChange={updateValue} />
      {errors ?
              <div className="error">{errors}</div> : <></>}
    </div>
  );
}

Input.propTypes= {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Input;
