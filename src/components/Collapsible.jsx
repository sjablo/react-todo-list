import React, { useState } from "react";
import Button from "./Button";
import styles from "./Collapsible.module.css";

const Collapsible = ({ text }) => {
  const [isVisible, setIsVisible] = useState(0);

  return (
    <>
      {text && (
        <Button
          text="Show/hide"
          onClick={() => setIsVisible((prevState) => !prevState)}
        />
      )}
      <p className={isVisible ? styles.visible : styles.hidden}>{text}</p>
    </>
  );
};

export default Collapsible;
