//Route đưa người dùng tới các trang khi chưa đăng nhập
import Home from "~/Components/Home";
import Login from "~/Components/Login";
import Print from "~/Components/Print";
import PropertyPage from "~/Components/PropertyPage";
export const publicRoutes = [
    { path: "/property", component: PropertyPage },
    { path: "/", component: Home },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/print",
        component: Print,
    },
];

//Route đưa người dùng tới các trang khi đã đăng nhập
export const privateRoutes = [];