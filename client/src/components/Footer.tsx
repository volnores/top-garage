import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT, CONTACTS, SERVICE } from '../router/routes';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 w-full">
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Автосервис Top Garage</h2>
            <p className="mt-2 text-lg max-w-[620px]">
              Мы предлагаем полный спектр услуг для вашего автомобиля, включая диагностику, ремонт и
              обслуживание.
            </p>
            <p className="mt-2 text-md text-gray-400 max-w-[620px]">
              Наша команда профессионалов готова предоставить вам высококачественный сервис и
              заботиться о вашем автомобиле.
            </p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Контакты</h3>
            <p className="text-lg">
              Телефон:{' '}
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:text-blue-500 transition duration-200">
                +7 (985) 242-03-53
              </a>
            </p>
            <p className="text-lg">
              Email:{' '}
              <a
                href="mailto:info@autoservice.TopGarage"
                className="text-blue-400 hover:text-blue-500 transition duration-200">
                info@autoservice.ru
              </a>
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Полезные ссылки</h3>
            <a
              onClick={() => {
                navigate(SERVICE);
                window.scrollTo(0, 0); // Прокрутка до верхней части страницы
              }}
              className="text-blue-400 cursor-pointer hover:text-blue-500 mb-1 transition duration-200">
              Наши услуги
            </a>
            <a
              onClick={() => {
                navigate(ABOUT);
                window.scrollTo(0, 0); // Прокрутка до верхней части страницы
              }}
              className="text-blue-400 cursor-pointer hover:text-blue-500 mb-1 transition duration-200">
              О нас
            </a>
            <a
              onClick={() => {
                navigate(CONTACTS);
                window.scrollTo(0, 0); // Прокрутка до верхней части страницы
              }}
              className="text-blue-400 cursor-pointer hover:text-blue-500 mb-1 transition duration-200">
              Контакты
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Мы в соцсетях</h3>
          <div className="flex space-x-4">
            <a
              target="blank"
              href="https://vk.com/topgarage_carservice"
              className="text-blue-400 hover:text-blue-500 transition duration-200 font-bold">
              VK
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm font-semibold">{`© ${year} Автосервис Top Garage. Все права защищены.`}</p>
          <p className="text-sm font-semibold text-gray-400">
            Качество работы — наша главная цель!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
