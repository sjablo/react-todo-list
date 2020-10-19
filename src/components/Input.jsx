import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

const Input = ({
  className,
  handleChange,
  label,
  name,
  required,
  type,
  value,
}) => (
  <>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <input
      className={cn(styles.input, className)}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </>
);

export default Input;
