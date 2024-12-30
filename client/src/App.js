import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import AppRouter from './router/AppRouter';
function App() {
    return (_jsx(_Fragment, { children: _jsx(AppRouter, {}) }));
}
export default App;
