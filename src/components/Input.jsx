import React from "react";

const Input = ({
  name,
  value,
  handleChange,
  label,
  type,
  required,
  multifield = false,
}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={(event) => {
        event.persist();
        if (multifield) {
          handleChange((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }));
        } else handleChange(event.target.value);
        event.preventDefault();
      }}
      required={required}
    />
  </>
);

export default Input;
