import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("div", { className: "px-4", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Layout;
