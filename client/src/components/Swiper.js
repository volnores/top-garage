import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import serviceImg from '../../public/service.jpeg';
import hand from '../../public/hand.jpg';
import car from '../../public/car.jpg';
import { useNavigate } from 'react-router-dom';
import { SERVICE, STOCKS } from '../router/routes';
const SwiperComponent = () => {
    const scrollToContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navigate = useNavigate();
    const handleNavigateService = () => {
        navigate(SERVICE);
    };
    const handleNavigateStocks = () => {
        navigate(STOCKS);
    };
    return (_jsx(_Fragment, { children: _jsxs(Swiper, { modules: [Pagination, Autoplay], spaceBetween: 30, slidesPerView: 1, pagination: { clickable: true }, autoplay: {
                delay: 20000,
                disableOnInteraction: false,
            }, className: "mb-4", children: [_jsx(SwiperSlide, { children: _jsxs("div", { className: "bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative", style: { backgroundImage: `url(${serviceImg})` }, children: [_jsx("h2", { className: "text-3xl font-bold relative z-10", children: "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441" }), _jsx("div", { className: "absolute inset-0 bg-black opacity-60 rounded-lg" }), _jsxs("p", { className: "text-4xl mb-4 font-bold text-customColor relative z-10", children: ["\u0420\u0435\u043C\u043E\u043D\u0442 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 ", _jsx("br", {}), _jsx("span", { className: "text-blue-400", children: "\u0432 \u0420\u0430\u043C\u0435\u043D\u0441\u043A\u043E\u043C" })] }), _jsxs("p", { className: "flex flex-col relative z-10 text-lg", children: [_jsx("p", { className: "text-2xl mb-8 font-bold ", children: "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C \u043F\u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438!" }), "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434, \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430! ", _jsx("br", {})] }), _jsxs("div", { className: "flex flex-col  md:flex-row md:space-x-4 gap-4 mb-4 relative z-10", children: [_jsx("button", { onClick: scrollToContactForm, className: "bg-blue-600 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700", children: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0435\u0440\u0432\u0438\u0441" }), _jsx("button", { onClick: handleNavigateService, className: "bg-sky-500 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-sky-600", children: "\u0412\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" })] })] }) }), _jsx(SwiperSlide, { children: _jsxs("div", { className: "bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative", style: { backgroundImage: `url(${hand})` }, children: [_jsx("h2", { className: "text-3xl font-bold relative z-10", children: "\u0412\u0430\u0448 \u0430\u0432\u0442\u043E, \u043D\u0430\u0448\u0430 \u0437\u0430\u0431\u043E\u0442\u0430!" }), _jsx("div", { className: "absolute inset-0 bg-black opacity-60 rounded-lg" }), _jsxs("p", { className: "text-4xl mb-4 font-bold text-customColor relative z-10 ", children: ["\u0417\u0430\u043D\u0438\u043C\u0430\u0439\u0442\u0435\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0434\u0435\u043B\u0430\u043C\u0438, \u043F\u043E\u043A\u0430 \u0432\u0430\u0448 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C", _jsx("br", {}), _jsx("span", { className: "text-orange-300", children: " \u0432 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0445 \u0440\u0443\u043A\u0430\u0445" })] }), _jsxs("p", { className: "flex relative z-10 text-lg", children: ["\u0420\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E, \u0447\u0442\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0440\u0435\u043C\u043E\u043D\u0442\u0430. ", _jsx("br", {})] }), _jsxs("div", { className: "flex flex-col md:flex-row md:space-x-4 gap-4 mb-4 relative z-10", children: [_jsx("button", { onClick: handleNavigateStocks, className: "bg-blue-600 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700", children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u0441\u043A\u0438\u0434\u043A\u0430\u0445" }), _jsx("button", { onClick: scrollToContactForm, className: "bg-green-600 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-green-700", children: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443" })] })] }) }), _jsx(SwiperSlide, { children: _jsxs("div", { className: "bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative", style: { backgroundImage: `url(${car})` }, children: [_jsx("h2", { className: "text-3xl font-bold relative z-10", children: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F" }), _jsx("div", { className: "absolute inset-0 bg-black opacity-60 rounded-lg" }), _jsxs("p", { className: "text-4xl mb-4 font-bold text-customColor relative z-10", children: [_jsx("span", { className: "font-bold text-yellow-400", children: "\u0421\u043A\u0438\u0434\u043A\u0438" }), " \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432!"] }), _jsxs("p", { className: "flex relative z-10 text-lg", children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 10% \u0441\u043A\u0438\u0434\u043A\u0438 \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0438\u0437\u0438\u0442. ", _jsx("br", {}), " \u0421\u043F\u0435\u0448\u0438\u0442\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438!"] }), _jsxs("div", { className: "flex flex-col md:flex-row md:space-x-4 gap-4 mb-4 relative z-10", children: [_jsx("button", { onClick: handleNavigateStocks, className: "bg-blue-600 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700", children: "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" }), _jsx("button", { onClick: scrollToContactForm, className: "bg-red-600 min-w-60 font-medium text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-red-700", children: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441" })] })] }) })] }) }));
};
export default SwiperComponent;
