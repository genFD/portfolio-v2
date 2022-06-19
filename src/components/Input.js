import React, { useState } from 'react';

const Input = ({ errorMessage, label, onChange, ...inputProps }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label text-body-4">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        className="form-input"
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <small className="form-alert text-body-3 mt-2">{errorMessage}</small>
    </div>
  );
};

export default Input;
