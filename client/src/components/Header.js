import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CategorySlider from './CategorySlider';
import logo from '../../public/logo.png';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../router/routes';
import ContactForm from './ContactForm';
import Modal from './Modal';
import { useAppDispatch, useAppSelector } from '../store';
import { setIsOpenModal } from '../store/slices/storeSlice';
const categories = [
    { title: 'Главная' },
    { title: 'Услуги' },
    { title: 'О компании' },
    { title: 'Акции' },
    { title: 'Блог' },
    { title: 'Контакты' },
];
const Header = () => {
    const { isOpenModal } = useAppSelector((state) => state.store);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleOpenModal = () => {
        dispatch(setIsOpenModal(true));
    };
    const handleCloseModal = () => {
        dispatch(setIsOpenModal(false));
    };
    const handleNav = () => {
        navigate(HOME);
    };
    const handleScrollToMap = () => {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
                block: 'start', // Прокручиваем к началу элемента
            });
        }
    };
    return (_jsxs("header", { children: [_jsxs("div", { className: "bg-gray-800 py-8 px-4 flex flex-col md:flex-row justify-between items-center", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: handleNav, className: "text-3xl font-bold text-white hover:text-indigo-600", children: _jsx("img", { src: logo, alt: "", width: 60 }) }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("p", { className: "text-white text-3xl font-bold", children: "TOP GARAGE" }), _jsx("p", { className: "text-gray-400", children: "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442 \u0430\u0432\u0442\u043E" })] })] }), _jsxs("div", { className: "flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-start", children: [_jsx("div", { className: "flex flex-col text-white text-lg max-w-sm items-center md:items-start mr-8", children: _jsxs("p", { className: "text-white text-lg text-center md:text-left", children: ["\u041C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F: ", _jsx("br", {}), ' ', _jsx("a", { onClick: handleScrollToMap, className: "cursor-pointer text-blue-400 hover:text-blue-500", children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435" })] }) }), _jsxs("div", { className: "flex flex-col items-center border-l border-gray-600 pl-4 pr-4 mt-2 md:mt-0 md:pl-8 md:pr-8 md:items-start", children: [_jsx("p", { className: "text-white font-bold text-xl md:text-2xl text-center md:text-left", children: "+7 (985) 242-03-53" }), _jsx("p", { className: "text-gray-300 text-md text-center md:text-left", children: "\u041F\u043D-\u0421\u0431: \u0441 09:00 \u0434\u043E 20:00" })] }), _jsx("div", { className: "mt-2 md:mt-0 md:ml-4 text-center md:text-left", children: _jsx("button", { onClick: handleOpenModal, className: "text-base font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-3 shadow-sm", children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A" }) })] })] }), _jsx("div", { children: _jsx(CategorySlider, { categories: categories }) }), _jsx(Modal, { isOpenModal: isOpenModal, handleCloseModal: handleCloseModal, children: _jsx(ContactForm, {}) })] }));
};
export default Header;
