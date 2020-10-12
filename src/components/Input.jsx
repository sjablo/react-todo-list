import React from "react";
import cx from "classnames";
import styles from "./Input.module.css";

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
      className={cx(styles.input, className)}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </>
);

export default Input;
