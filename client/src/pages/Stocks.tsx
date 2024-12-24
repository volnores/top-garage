import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../router/routes';

const Stocks: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto py-8 ">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li className="">
            <a
              onClick={() => navigate(HOME)}
              className="hover:text-blue-500 font-medium text-lg cursor-pointer">
              Главная
            </a>
            <span className="mx-2 font-medium text-lg">---</span>
          </li>
          <li className="font-medium text-lg">Акции</li>
        </ol>
      </nav>

      <h2 className="font-bold text-2xl mb-4">Акции и скидки</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Карточки с акциями */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Скидка 10% на замену масла</h3>
          <p>Получите скидку 10% на замену масла при записи через сайт!</p>
          <span className="block text-sm text-gray-500 mt-2">Акция действительна до 31 января</span>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
