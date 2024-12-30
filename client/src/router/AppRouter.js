import { jsx as _jsx } from "react/jsx-runtime";
import { publicRouter } from './routers';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
const AppRouter = () => {
    return (_jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Layout, {}), children: publicRouter.map((item) => (_jsx(Route, { path: item.path, element: _jsx(item.element, {}) }, item.path))) }) }));
};
export default AppRouter;
