import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SwiperComponent from '../components/Swiper';
import SwiperComponentSales from '../components/SwiperComponentSales';
import ContactForm from '../components/ContactForm';
import Brands from '../components/Brands';
import Oil from '../../public/oil.jpg';
import Filter from '../../public/filter.jpg';
import Kolodki from '../../public/kolodki.jpg';
import SparkPlugs from '../../public/spark plugs.jpg';
import Coolant from '../../public/coolant.jpg';
import Hodovaya from '../../public/Hodovaya.jpeg';
import oilSale from '../../public/oilSale.jpg';
import antiFreeze from '../../public/antiFreeze.jpg';
import lift from '../../public/lift.jpg';
import { useNavigate } from 'react-router-dom';
import { SERVICE } from '../router/routes';
const sales = [
    { img: Oil, title: 'Замена масла' },
    { img: Filter, title: 'Замена воздушного фильтра' },
    { img: Kolodki, title: 'Замена дисков и колодок' },
    { img: SparkPlugs, title: 'Замена свечей зажигания' },
    { img: Coolant, title: 'Замена охлаждающей жидкости' },
    { img: Hodovaya, title: 'Замена ходовой' },
];
const images = [
    { img: oilSale, title: 'Замена масла' },
    { img: antiFreeze, title: 'Замена охлаждающей жидкости' },
    { img: lift, title: 'Ремонт ходовой' },
];
const Home = () => {
    const navigate = useNavigate();
    const handleNavigateService = () => {
        navigate(SERVICE);
        scrollTo(0, 0);
    };
    return (_jsxs("div", { children: [_jsx(SwiperComponent, {}), _jsx("p", { className: "text-3xl font-semibold text-gray-800", children: "\u0412\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F" }), _jsx("div", { className: "flex mt-4 gap-4", children: _jsx(SwiperComponentSales, { slides: images }) }), _jsx("p", { className: "text-3xl font-semibold mt-4 text-center text-gray-800", children: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" }), _jsx("p", { className: "text-center text-lg mt-2 text-gray-800", children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F: \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u043C 99% \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0435\u0439 \u0440\u044F\u0434\u043E\u0432\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438\u0441\u0442\u0430" }), _jsx("div", { className: "my-4", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: sales.map((item, index) => (_jsx("div", { onClick: handleNavigateService, className: "bg-slate-200  flex h-72 rounded-md items-center justify-center relative overflow-hidden ", children: _jsxs("div", { className: "relative h-full w-full group", children: [' ', _jsx("div", { className: "relative h-full w-full transition-transform duration-300 group-hover:scale-125", children: _jsx("img", { src: item.img, alt: item.title, className: "h-full  w-full object-cover transition-opacity duration-300 group-hover:opacity-100" }) }), _jsx("div", { className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center", children: _jsx("div", { className: "text-center  cursor-pointer text-lg font-medium text-white p-24", children: item.title }) })] }) }, index))) }) }), _jsx("div", { id: "contact-form", children: _jsx(ContactForm, {}) }), _jsxs("div", { className: "mb-4", children: [_jsx("p", { className: "text-center mt-4 text-3xl font-semibold text-gray-800", children: "\u041C\u0430\u0440\u043A\u0438 \u043C\u0430\u0448\u0438\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C" }), _jsx("div", { className: "text-xl mb-4", children: _jsx(Brands, {}) }), _jsx("div", { id: "map", children: _jsx("iframe", { className: "rounded w-full", src: "https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=166149550113", width: "560", height: "400" }) })] })] }));
};
export default Home;
