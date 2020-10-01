import React from "react";
import Button from "./Button";
import EditionForm from "./EditionForm";
import styles from "./Modal.module.css";

const Modal = ({ onClose }) => (
  <div className={styles.modal}>
    <EditionForm />
    <Button onClick={onClose} text="X" />
  </div>
);

export default Modal;
