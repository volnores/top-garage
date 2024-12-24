import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'; // Путь к вашему типу состояния
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

const Service: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCategory, search } = useSelector((state: RootState) => state.store);

  const handleCategoryChange = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="mx-auto py-8">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li>
            <a
              onClick={() => navigate(HOME)}
              className="hover:text-blue-500 font-medium text-lg cursor-pointer">
              Главная
            </a>
            <span className="mx-2 font-medium text-lg">---</span>
          </li>
          <li className="font-medium text-lg">Услуги</li>
        </ol>
      </nav>

      <div className="flex flex-col sm:flex-row">
        {/* Навигация по категориям */}
        <div className="w-full sm:w-1/4 mb-4 sm:mr-4">
          <h2 className="font-bold text-2xl mb-4">Категории</h2>
          <div className="grid grid-cols-1 gap-4">
            {categoriesData.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`p-4 border rounded-lg text-center cursor-pointer transition-colors duration-300 
                      ${
                        selectedCategory === category
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-black'
                      }`}>
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Основные услуги в виде сетки */}
        <div className="w-full sm:w-3/4">
          <h2 className="font-bold text-2xl mb-4">Услуги автосервиса</h2>
          <input
            type="text"
            placeholder="Поиск услуг..."
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={search}
            onChange={handleSearchChange}
          />
          {search && (
            <button
              onClick={handleResetSearch}
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
              Сбросить поиск
            </button>
          )}
          {filteredServices.length === 0 ? (
            <p className="text-gray-600 text-lg">Ничего не найдено</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Карточки с услугами */}
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-gray-300 p-4 rounded-lg shadow-lg transition-transform flex flex-col justify-between"
                  style={{ minHeight: '250px' }}>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-green-500">
                        {service.title !== 'Ремонт ходовой' && 'От'} {service.discountPrice}{' '}
                        {service.title !== 'Ремонт ходовой' && '₽'}
                      </span>
                      {service.discountPrice < service.price && (
                        <span className="text-red-500 line-through ml-2">{service.price} ₽</span>
                      )}
                    </div>
                    {service.discountPrice < service.price && (
                      <span className="bg-yellow-400 text-white font-medium px-6 py-2 rounded-full">
                        Скидка!
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
