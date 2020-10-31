import React, {useState} from 'react';
import style from './dropdown.module.scss';
import PropTypes from 'prop-types';

function DropDown({label, placeholder, options, onChange, value}) {
  const [valueState, setValue] = useState(value);
  const updateValue = (e) => {
    setValue(e.target.value);
    onChange(e);
  };
  return (
    <div className={style.inputwrapper}>
      <label>{label}</label>
      <select type="select"
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

export default DropDown;
