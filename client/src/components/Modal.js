import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const Modal = ({ children, isOpenModal, handleCloseModal }) => {
    return (_jsx("div", { children: isOpenModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50", onClick: () => {
                        console.log('Overlay clicked');
                        handleCloseModal();
                    } }), _jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-blue-900 p-6 rounded-lg shadow-lg max-w-md mx-auto relative", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { onClick: handleCloseModal, className: "absolute top-4 right-4 text-white", children: "\u00D7" }), children] }) })] })) }));
};
export default Modal;
