import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Popper from "../Popper";
import SPSSLogo from "~/Components/images/SPSS-logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header({ currentPage, username }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("page-info")}>
        <img src={SPSSLogo} alt="123" className={cx("logo")}></img>
        <h2 className={cx("current-page")}>{currentPage}</h2>
        <FontAwesomeIcon icon={faAngleDoubleRight} className={cx("icon")} />
      </div>
      <div className={cx("user-info")}>
        <div className={cx("pop-up")}>
          <Popper username={username} />
        </div>
        <div className={cx("separate")} />
        <Link className={cx("usage")} to={"/usage"}>
          Hướng dẫn sử dụng
        </Link>
      </div>
    </div>
  );
}
export default Header;
