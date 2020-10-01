import React from "react";

const Input = ({ name, value, handleChange, label, type, required }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(event) => {
        handleChange(event.target.value);
        event.preventDefault();
      }}
      required={required}
    />
  </>
);

export default Input;
