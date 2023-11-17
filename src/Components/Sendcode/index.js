import styles from "./Sendcode.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Sendcode() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("trangxacnhan")}>
        <div className={cx("nhan_yeu_cau")}>
          <p>NHẬN YÊU CẦU THÀNH CÔNG !</p>
          <div className={cx("box_ma_xn")}>
            <p className={cx("ma")}>MÃ XÁC NHẬN:</p>
            <p className={cx("ma_xn")}>0523HYN</p>
          </div>
        </div>
        <button className={cx("back")}>TRỞ VỀ TRANG CHỦ</button>
      </div>
    </div>
  );
}
export default Sendcode;
