import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { sendContactForm, setName, setPhone, setCategory, setIsOpenModal, } from '../store/slices/storeSlice';
import { categoriesData } from '../pages/Service';
const ContactForm = () => {
    const dispatch = useDispatch(); // Explicitly type the dispatch function
    const { status, name, phone, category } = useSelector((state) => state.store);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate phone number
        const phonePattern = /^8\d{10}$/; // Regular expression for validating phone number
        if (!phonePattern.test(phone)) {
            alert('Пожалуйста, введите действительный номер телефона, начинающийся с 8.');
            return;
        }
        const data = { name, phone, category };
        try {
            // Dispatch the async thunk and unwrap it
            await dispatch(sendContactForm(data)).unwrap();
            alert('Сообщение отправлено');
            dispatch(setIsOpenModal(false));
            dispatch(setName(''));
            dispatch(setPhone(''));
            dispatch(setCategory(''));
        }
        catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            alert('Ошибка при отправке сообщения');
        }
    };
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        dispatch(setPhone(inputValue)); // Update phone number
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col items-center text-center mx-auto p-6 py-4 rounded-md bg-blue-900", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4 text-center text-white", children: "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438" }), _jsx("p", { className: "text-white mb-4", children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F" }), _jsx("input", { type: "text", className: "w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", value: name, onChange: (e) => dispatch(setName(e.target.value)), required: true }), _jsx("input", { type: "tel", className: "w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430* 8(9xx)xxx-xx-xx", value: phone, onChange: handlePhoneChange, required: true }), _jsxs("select", { className: "w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", value: category, onChange: (e) => dispatch(setCategory(e.target.value)), required: true, children: [_jsx("option", { value: "", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E" }), categoriesData.map((item) => (_jsx("option", { value: item, children: item }, item)))] }), _jsx("button", { type: "submit", className: "w-full bg-blue-500 max-w-md mb-4 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200", disabled: status === 'loading', children: status === 'loading' ? 'Отправка...' : 'Отправить' })] }));
};
export default ContactForm;
