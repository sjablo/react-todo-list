import React from "react";
import styles from "./Header.module.css";

const Header = ({ text }) => <header className={styles.header}>{text}</header>;

export default Header;
