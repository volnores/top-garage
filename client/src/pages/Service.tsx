import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="mx-auto py-8  ">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li>
            <a href="#" className="hover:text-blue-500 font-medium text-lg">
              Главная
            </a>
            <span className="mx-2 font-medium text-lg">---</span>
          </li>
          <li className="font-medium text-lg">Услуги</li>
        </ol>
      </nav>

      <div className="flex flex-col sm:flex-row">
        {/* Навигация по категориям */}
        <div className="w-full sm:w-1/4 bg-gray-100 p-4 rounded-lg mb-4 sm:mr-4">
          <h2 className="font-bold text-lg mb-2">Категории</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block bg-white cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-200 text-base p-3 rounded font-medium">
                Замена масла
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-white cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-200 text-base p-3 rounded font-medium">
                Сервис тормозной системы
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-white cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-200 text-base p-3 rounded font-medium">
                Диагностика двигателя
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-white cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-200 text-base p-3 rounded font-medium">
                Ремонт подвески
              </a>
            </li>
          </ul>
        </div>

        {/* Основные категории в виде сетки */}
        <div className="w-full sm:w-3/4">
          <h2 className="font-bold text-2xl mb-4">Услуги автосервиса</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Карточки с услугами */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Замена масла</h3>
              <p>Профессиональная замена масла на всех марках автомобилей.</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Тормозная система</h3>
              <p>Проверка и обслуживание тормозной системы вашего автомобиля.</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Диагностика двигателя</h3>
              <p>Компьютерная диагностика и устранение неисправностей.</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Ремонт подвески</h3>
              <p>Качественный ремонт и замена элементов подвески.</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Электросервис</h3>
              <p>Услуги по диагностике и ремонту электрооборудования.</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Техническое обслуживание</h3>
              <p>Полное техническое обслуживание вашего автомобиля.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
