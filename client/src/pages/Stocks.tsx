import React from 'react';

const Stocks: React.FC = () => {
  return (
    <div className="mx-auto py-8 ">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li className="">
            <a href="#" className="hover:text-blue-500 font-medium text-lg">
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
          <h3 className="font-bold text-xl mb-2">Скидка 20% на замену масла</h3>
          <p>Получите скидку 20% на замену масла при записи через сайт!</p>
          <span className="block text-sm text-gray-500 mt-2">
            Акция действительна до 31 декабря
          </span>
        </div>
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Проверка тормозной системы - бесплатно!</h3>
          <p>Запишитесь на сервис и получите бесплатную проверку тормозной системы.</p>
          <span className="block text-sm text-gray-500 mt-2">Акция действительна до 31 января</span>
        </div>
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Диагностика двигателя - половина цены!</h3>
          <p>Наши мастера диагностируют ваш двигатель за 50% от обычной стоимости.</p>
          <span className="block text-sm text-gray-500 mt-2">
            Акция действительна до 15 февраля
          </span>
        </div>
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Скидка 15% на услуги сервиса в выходные</h3>
          <p>Посетите нас в выходные и получите скидку 15% на все услуги!</p>
          <span className="block text-sm text-gray-500 mt-2">
            Акция действует только по выходным
          </span>
        </div>
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Приведи друга — получи скидку!</h3>
          <p>Приведите друга в наш автосервис и получите скидку 10% на следующий визит.</p>
          <span className="block text-sm text-gray-500 mt-2">Без ограничений по времени</span>
        </div>
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">Скидка 30% на ремонт подвески</h3>
          <p>Воспользуйтесь нашей зимней акцией на ремонт подвески!</p>
          <span className="block text-sm text-gray-500 mt-2">
            Акция действительна до конца зимы
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
