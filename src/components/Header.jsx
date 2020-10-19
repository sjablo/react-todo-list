import React from "react";
import styles from "./Header.module.scss";

const Header = ({ text }) => <header className={styles.header}>{text}</header>;

export default Header;
