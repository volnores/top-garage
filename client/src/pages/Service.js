import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchByWord, setSelectedCategory } from '../store/slices/storeSlice'; // Путь к вашему слайсу
import { servicesData } from '../API'; // Путь к вашему файлу данных
import { useNavigate } from 'react-router-dom';
import { HOME } from '../router/routes';
export const categoriesData = [
    'Все',
    'Двигатель',
    'Трансмиссии',
    'Тормозная система',
    'Система зажигания',
    'Система охлаждения',
    'Ходовая часть',
];
const Service = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedCategory, search } = useSelector((state) => state.store);
    const handleCategoryChange = (category) => {
        dispatch(setSelectedCategory(category));
    };
    const handleSearchChange = (event) => {
        dispatch(setSearchByWord(event.target.value));
    };
    const handleResetSearch = () => {
        dispatch(setSearchByWord('')); // Сбрасываем ввод поиска
    };
    const filteredServices = servicesData.filter((service) => {
        const isMatchingCategory = selectedCategory === 'Все' || service.category === selectedCategory;
        const isMatchingSearch = search
            ? service.title.toLowerCase().includes(search.toLowerCase())
            : true;
        return isMatchingCategory && isMatchingSearch;
    });
    return (_jsxs("div", { className: "mx-auto py-8", children: [_jsx("nav", { className: "mb-8", children: _jsxs("ol", { className: "list-reset flex text-gray-600", children: [_jsxs("li", { children: [_jsx("a", { onClick: () => navigate(HOME), className: "hover:text-blue-500 font-medium text-lg cursor-pointer", children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), _jsx("span", { className: "mx-2 font-medium text-lg", children: "---" })] }), _jsx("li", { className: "font-medium text-lg", children: "\u0423\u0441\u043B\u0443\u0433\u0438" })] }) }), _jsxs("div", { className: "flex flex-col sm:flex-row", children: [_jsxs("div", { className: "w-full sm:w-1/4 mb-4 sm:mr-4", children: [_jsx("h2", { className: "font-bold text-2xl mb-4", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438" }), _jsx("div", { className: "grid grid-cols-1 gap-4", children: categoriesData.map((category) => (_jsx("div", { onClick: () => handleCategoryChange(category), className: `p-4 border rounded-lg text-center cursor-pointer transition-colors duration-300 
                      ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-black'}`, children: category }, category))) })] }), _jsxs("div", { className: "w-full sm:w-3/4", children: [_jsx("h2", { className: "font-bold text-2xl mb-4", children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0430" }), _jsx("input", { type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0443\u0441\u043B\u0443\u0433...", className: "w-full mb-4 p-2 border border-gray-300 rounded", value: search, onChange: handleSearchChange }), search && (_jsx("button", { onClick: handleResetSearch, className: "mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A" })), filteredServices.length === 0 ? (_jsx("p", { className: "text-gray-600 text-lg", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredServices.map((service) => (_jsxs("div", { className: "border border-gray-300 p-4 rounded-lg shadow-lg transition-transform flex flex-col justify-between", style: { minHeight: '250px' }, children: [_jsx("h3", { className: "font-bold text-xl mb-2", children: service.title }), _jsx("p", { className: "text-gray-600 flex-grow mb-4", children: service.description }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsxs("span", { className: "text-lg font-bold text-green-500", children: [service.title !== 'Ремонт ходовой' && 'От', " ", service.discountPrice, ' ', service.title !== 'Ремонт ходовой' && '₽'] }), typeof service.price === 'number' &&
                                                            service.price >= 3 &&
                                                            service.discountPrice < service.price && (_jsxs("span", { className: "text-red-500 line-through ml-2", children: [service.price, " \u20BD"] }))] }), typeof service.price === 'number' &&
                                                    service.price >= 3 &&
                                                    service.discountPrice < service.price && (_jsx("span", { className: "bg-yellow-400 text-white font-medium px-6 py-2 rounded-full", children: "\u0421\u043A\u0438\u0434\u043A\u0430!" }))] })] }, service.id))) }))] })] })] }));
};
export default Service;
