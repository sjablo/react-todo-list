import React from "react";

const Input = ({ name, value, handleChange, label, type, required }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={(event) => {
        event.persist();
        handleChange((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
        event.preventDefault();
      }}
      required={required}
    />
  </>
);

export default Input;
