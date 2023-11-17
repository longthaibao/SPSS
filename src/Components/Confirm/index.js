import styles from "./Confirm.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Confirm() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("trangxacnhan")}>
        <div className={cx("nhan_yeu_cau")}>
          <p>XÁC NHẬN</p>
          <div className={cx("box_ma_xn")}>
            <div className={cx("minibox")}>
              <p className={cx("ma")}>Thông tin máy in</p>
              <div className={cx("b1_xam")}>
                <div className={cx("b2_trang tren")}>
                  <div className={cx("b3")}>
                    <p>+H6.P603</p>
                  </div>
                </div>
              </div>
              <p className={cx("ma")}>Thông tin máy in</p>
              <div className={cx("b1_xam")}>
                <div className={cx("b2_trang duoi")}>
                  <div className={cx("b3")}>
                    <p>Khổ giấy in: A4</p>
                    <p>Trang in: 2</p>
                    <p>Số trang trên một mặt: 1</p>
                    <p>Số mặt trên một tờ: 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={cx("back bt_trang")}>HỦY</button>
        <button className={cx("back")}>XÁC NHẬN</button>
      </div>
    </div>
  );
}
export default Confirm;
