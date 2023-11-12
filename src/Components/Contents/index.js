import classNames from "classnames/bind";
import styles from "./Contents.module.scss";
import Print from "../images/print.svg";
import History from "../images/history.svg";
import Buy from "../images/buy.svg";
const cx = classNames.bind(styles);
function Contents() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div className={cx("introduce")}>
          Chào mừng bạn đến với SSPS - Ứng dụng in thông minh
          <br />
          dành cho sinh viên Bách Khoa.
        </div>
        <div className={cx("option")}>
          <button className={cx("print")}>
            <img src={Print} alt=""></img>
          </button>
          <button className={cx("history")}>
            <img src={History} alt=""></img>
          </button>
          <button className={cx("buy")}>
            <img src={Buy} alt=""></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contents;
