import React from 'react';
import CategorySlider from './CategorySlider';
import logo from '../../public/logo.png';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../router/routes';

const categories = [
  { title: 'Главная' },
  { title: 'Услуги' },
  { title: 'О компании' },
  { title: 'Акции' },
  { title: 'Блог' },
  { title: 'Контакты' },
];

const scrollToContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(HOME);
  };
  return (
    <header>
      <div className="bg-gray-800 py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-6">
          <button
            onClick={handleNav}
            className="text-3xl font-bold text-white hover:text-indigo-600 ">
            <img src={logo} alt="" width={60} />
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-white text-3xl font-bold">TOP GARAGE</p>
            <p className="text-gray-400">Диагностика, обслуживание и ремонт авто</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-center">
          <div className="flex flex-col text-white text-lg max-w-sm">
            <p className="text-white text-lg mr-8">
              г. Раменское, ул. Чкалова, д 13 <br /> Посмотреть на карте
            </p>
          </div>
          <div className="flex flex-col items-start border-l border-gray-600 pl-4 pr-4 mt-2 md:mt-0 md:pl-8 md:pr-8">
            <p className="text-white font-bold text-xl md:text-2xl">+7 (000) 000-00-00</p>
            <p className="text-gray-300 text-md">Пн-Сб: с 09:00 до 20:00</p>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4">
            <button
              onClick={scrollToContactForm}
              className="text-base font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-3 shadow-sm">
              Заказать обратный звонок
            </button>
          </div>
        </div>
      </div>
      <div>
        <CategorySlider categories={categories} />
      </div>
    </header>
  );
};

export default Header;
