import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 py-12 border-t border-blue-200 w-full">
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-600">Автосервис XYZ</h2>
            <p className="mt-2 text-lg">
              Мы предлагаем полный спектр услуг для вашего автомобиля, включая диагностику, ремонт и
              обслуживание.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Наша команда профессионалов готова предоставить вам высококачественный сервис и
              заботиться о вашем автомобиле.
            </p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Контакты</h3>
            <p className="text-lg">
              Телефон:{' '}
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-lg">
              Email:{' '}
              <a href="mailto:info@autoservice.xyz" className="text-blue-600 hover:underline">
                info@autoservice.xyz
              </a>
            </p>
            <p className="text-lg">
              Адрес: <span className="text-gray-600">123 Автосервисная Улица, Город, Штат</span>
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Полезные ссылки</h3>
            <a href="#services" className="text-blue-600 hover:underline mb-1">
              Наши услуги
            </a>
            <a href="#about" className="text-blue-600 hover:underline mb-1">
              О нас
            </a>
            <a href="#contact" className="text-blue-600 hover:underline mb-1">
              Контакты
            </a>
            <a href="#faq" className="text-blue-600 hover:underline">
              Часто задаваемые вопросы
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Мы в соцсетях</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Instagram
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm">© 2023 Автосервис XYZ. Все права защищены.</p>
          <p className="text-xs text-gray-600">Качество работы — наша главная цель!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
