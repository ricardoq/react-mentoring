import React, {useState, useEffect} from 'react';
import './input.scss';
import PropTypes from 'prop-types';

function Input({label, type, placeholder, onChange, value}) {
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
      <label>{label}</label>
      <input type={type || 'text'}
             placeholder={placeholder}
             value={valueState}
             onChange={updateValue} />
    </div>
  );
}

Input.propTypes= {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
