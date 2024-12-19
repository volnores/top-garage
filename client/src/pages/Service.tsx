import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; // Путь к вашему типу состояния
import {
  setSearchByWord,
  setSelectedCategory,
} from "../store/slices/storeSlice"; // Путь к вашему слайсу

export const servicesData = [
  {
    id: 1,
    title: "Замена масла",
    category: "Общие",
    description: "Профессиональная замена масла на всех марках автомобилей.",
    price: 1599,
    discountPrice: 1299,
  },
  {
    id: 2,
    title: "Тормозная система",
    category: "Тормоза",
    description: "Проверка и обслуживание тормозной системы вашего автомобиля.",
    price: 2990,
    discountPrice: 1899,
  },
  {
    id: 3,
    title: "Диагностика двигателя",
    category: "Общие",
    description: "Компьютерная диагностика и устранение неисправностей.",
    price: 1990,
    discountPrice: 999,
  },
  {
    id: 4,
    title: "Ремонт подвески",
    category: "Подвеска",
    description: "Качественный ремонт и замена элементов подвески.",
    price: 2599,
    discountPrice: 2399,
  },
  {
    id: 5,
    title: "Электросервис",
    category: "Электрика",
    description: "Услуги по диагностике и ремонту электрооборудования.",
    price: 1899,
    discountPrice: 1599,
  },
  {
    id: 6,
    title: "Техническое обслуживание",
    category: "Общие",
    description: "Полное техническое обслуживание вашего автомобиля.",
    price: 3990,
    discountPrice: 2799,
  },
];

const categoriesData = ["Все", "Общие", "Тормоза", "Подвеска", "Электрика"];

const Service: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCategory, search } = useSelector(
    (state: RootState) => state.store
  );

  const handleCategoryChange = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchByWord(event.target.value));
  };

  const handleResetSearch = () => {
    dispatch(setSearchByWord("")); // Сбрасываем ввод поиска
  };

  const filteredServices = servicesData.filter((service) => {
    const isMatchingCategory =
      selectedCategory === "Все" || service.category === selectedCategory;
    const isMatchingSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return isMatchingCategory && isMatchingSearch;
  });

  return (
    <div className="mx-auto py-8">
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
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-black"
                    }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Основные категории в виде сетки */}
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
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Сбросить поиск
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Карточки с услугами */}
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="border border-gray-300 p-4 rounded-lg shadow-lg transition-transform flex flex-col justify-between"
                style={{ minHeight: "230px" }}
              >
                {" "}
                {/* Установка минимальной высоты */}
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-green-500">
                      От {service.discountPrice} ₽
                    </span>
                    {service.discountPrice < service.price && (
                      <span className="text-red-500 text line-through ml-2">
                        {service.price} ₽
                      </span>
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
        </div>
      </div>
    </div>
  );
};

export default Service;
