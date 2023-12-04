import Form from "../Form";
import Header from "../Header";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Footer from "../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [datausername, setDataUserName] = useState("");
  const handleLoginChange = (newIsLogin) => {
    setIsLogin(newIsLogin);
  };
  const handleSetUserName = (newusername) => {
    setDataUserName(newusername);
  };
  return (
    <div className={cx("wrapper")}>
      <Header
        className={cx("header")}
        currentPage={"Đăng nhập"}
        username={datausername}
      ></Header>
      <Form
        isLogin={isLogin}
        handleSetUserName={handleSetUserName}
        onLoginChange={handleLoginChange}
        className={cx("form")}
      ></Form>
      <Footer />
    </div>
  );
}

export default Login;
