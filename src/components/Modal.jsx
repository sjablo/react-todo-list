import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, onClose }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <Button className={styles.button} onClick={onClose} text="X" />
      {children}
    </div>,
    el
  );
};

export default Modal;
