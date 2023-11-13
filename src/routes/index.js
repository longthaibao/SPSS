//Route đưa người dùng tới các trang khi chưa đăng nhập
import Home from "~/Components/Home";
import Login from "~/Components/Login";
export const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/login",
    component: Login,
  },
];

//Route đưa người dùng tới các trang khi đã đăng nhập
export const privateRoutes = [];
