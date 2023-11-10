import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header({ username }) {
  return (
    <div className={cx("header")}>
      <h5 className={cx("title")}>{`Xin chào, ${username}`}</h5>
      <button className={cx("more-btn")}>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Header;
