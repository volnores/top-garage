import React from 'react';
import CategorySlider from './CategorySlider';

const categories = [
  { title: 'Автохимия' },
  { title: 'Подвеска' },
  { title: 'Тормоза' },
  { title: 'Электрика' },
  { title: 'Кузовной ремонт' },
  { title: 'Замена масла' },
];

const Header: React.FC = () => {
  return (
    <header>
      <div className=" bg-white p-6  flex flex-col md:flex-row justify-between items-center rounded-md border-b">
        <div className="flex items-center space-x-4">
          <button className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">LOGO</button>
          <div>
            <p className="text-gray-800 text-lg">Ремонт и замена масла в Раменском</p>
            <p className="text-gray-600 text-sm">Улица ****** пн-пт с 9:00 - 18:00</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <p className="text-gray-800 font-bold text-xl md:text-2xl">892341848324</p>
          <button className="mt-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2">
            Заказать обратный звонок
          </button>
        </div>
      </div>
      <div className="">
        <CategorySlider categories={categories} />
      </div>
    </header>
  );
};

export default Header;
