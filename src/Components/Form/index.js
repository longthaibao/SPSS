import classNames from "classnames/bind";
import styles from "./Form.module.scss";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function Form({ isLogin, onLoginChange, handleSetUserName }) {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [focusUserName, setFocusUserName] = useState(false);
  const [focusPassword, setFocusPassWord] = useState(false);

  const usernameRef = useRef();
  const userpassRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post("http://localhost:5001/login/create", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        if (response.statusText === "OK") {
          onLoginChange(true);
          handleSetUserName(response.data.data.username);
          // Kiểm tra trạng thái và chuyển hướng
          window.location.href = "/";
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChangeUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleChangeUserPass = (e) => {
    setPassWord(e.target.value);
    console.log(e.target.value);
  };
  const handleFocusUserName = (e) => {
    setFocusUserName(true);
  };
  const handleFocusPassWord = (e) => {
    setFocusPassWord(true);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-login")}>
        <h1 className={cx("title")}>Đăng nhập</h1>
        <form method="POST" action="/login/create" className={cx("form")}>
          <div className={cx("form-group")}>
            <input
              className={cx("user-name")}
              type="text"
              placeholder="Tên đăng nhập/Số điện thoại"
              onChange={handleChangeUserName}
              ref={usernameRef}
              name="username"
              required={true}
              onBlur={handleFocusUserName}
              focus={focusUserName.toString()}
            />
            <span className={cx("error-message")}>
              Vui lòng nhập trường này
            </span>
          </div>
          <div className={cx("form-group")}>
            <input
              className={cx("user-password")}
              type="password"
              placeholder="Mật khẩu"
              name="userpassword"
              ref={userpassRef}
              onChange={handleChangeUserPass}
              required={true}
              onBlur={handleFocusPassWord}
              focus={focusPassword.toString()}
            />
            <span className={cx("error-message")}>
              Vui lòng nhập trường này
            </span>
          </div>
          <button type="submit" onClick={handleSubmit} className={cx("submit")}>
            ĐĂNG NHẬP
          </button>
        </form>
        <div className={cx("more-option")}>
          <a href="#" className={cx("forgotpass")}>
            Quên mật khẩu
          </a>
          <a href="#" className={cx("otp")}>
            Đăng nhập với mã OTP
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
