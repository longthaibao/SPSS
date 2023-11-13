//Route đưa người dùng tới các trang khi chưa đăng nhập
import Home from "~/Components/Home";
import Print from "~/Components/Print";
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/print', component: Print},
];

//Route đưa người dùng tới các trang khi đã đăng nhập
export const privateRoutes = [];
