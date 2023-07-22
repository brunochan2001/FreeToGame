import React, { useState } from 'react';
import { options } from '../../lib/types';
import './style.css';

interface Props {
  label: string;
  options: options[];
  value: string;
  onChange: (option: options) => void;
}

const CustomSelect: React.FC<Props> = ({ label, options, value, onChange }) => {
  const [showDropDown, setShowDropdown] = useState(false);
  const onClickOption = () => {
    setShowDropdown(!showDropDown);
  };

  return (
    <div className="select__container">
      <label>{label}</label>
      <div className="select" onMouseLeave={() => setShowDropdown(false)}>
        <button
          className="select__label"
          onMouseEnter={() => setShowDropdown(true)}
        >
          {value || `all ${label}`}
        </button>
        {showDropDown && (
          <ul className="select__options">
            {options.map((option, index) => (
              <li key={index} onClick={onClickOption}>
                <button onClick={() => onChange(option)}>{option.label}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
