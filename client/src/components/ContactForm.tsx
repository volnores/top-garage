import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendContactForm,
  setName,
  setPhone,
  setCategory,
  setIsOpenModal,
} from '../store/slices/storeSlice';
import { RootState } from '../store';
import { categoriesData } from '../pages/Service';
import { AppDispatch } from '../store'; // Import AppDispatch type to type dispatch correctly

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Explicitly type the dispatch function
  const { status, name, phone, category } = useSelector((state: RootState) => state.store);

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
      alert('Ошибка при отправке сообщения');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(setPhone(inputValue)); // Update phone number
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-center mx-auto p-6 py-4 rounded-md bg-blue-900">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Форма обратной связи</h2>
      <p className="text-white mb-4">Заполните форму и мы свяжемся с вами в ближайшее время</p>

      <input
        type="text"
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        required
      />

      <input
        type="tel"
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите номер телефона* 8(9xx)xxx-xx-xx"
        value={phone}
        onChange={handlePhoneChange}
        required
      />

      <select
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        required>
        <option value="">Выберите категорию</option>
        {categoriesData.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 max-w-md mb-4 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200"
        disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
};

export default ContactForm;
