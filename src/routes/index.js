//Route đưa người dùng tới các trang khi chưa đăng nhập
import Home from "~/Components/Home";
export const publicRoutes = [{ path: "/", component: Home }];

//Route đưa người dùng tới các trang khi đã đăng nhập
export const privateRoutes = [];
