import React from 'react';
import SwiperComponent from '../components/Swiper';
import SwiperComponentSales from '../components/SwiperComponentSales';
import ContactForm from '../components/ContactForm';
import Brands from '../components/Brands';
import Oil from '../../public/oil.jpg';
import Filter from '../../public/filter.jpg';
import Kolodki from '../../public/kolodki.jpg';
import SparkPlugs from '../../public/spark plugs.jpg';
import Coolant from '../../public/coolant.jpg';
import Hodovaya from '../../public/Hodovaya.jpeg';
import oilSale from '../../public/oilSale.jpg';
import antiFreeze from '../../public/antiFreeze.jpg';
import lift from '../../public/lift.jpg';

import { useNavigate } from 'react-router-dom';
import { SERVICE } from '../router/routes';

const sales = [
  { img: Oil, title: 'Замена масла' },
  { img: Filter, title: 'Замена воздушного фильтра' },
  { img: Kolodki, title: 'Замена дисков и колодок' },
  { img: SparkPlugs, title: 'Замена свечей зажигания' },
  { img: Coolant, title: 'Замена охлаждающей жидкости' },
  { img: Hodovaya, title: 'Замена ходовой' },
];

const images = [
  { img: oilSale, title: 'Замена масла' },
  { img: antiFreeze, title: 'Замена охлаждающей жидкости' },
  { img: lift, title: 'Ремонт ходовой' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateService = () => {
    navigate(SERVICE);
    scrollTo(0, 0);
  };

  return (
    <div>
      <SwiperComponent />
      <p className="text-3xl font-semibold text-gray-800">Выгодные предложения</p>
      <div className="flex mt-4 gap-4">
        <SwiperComponentSales slides={images} />
      </div>
      <p className="text-3xl font-semibold mt-4 text-center text-gray-800">Популярные услуги</p>
      <p className="text-center text-lg mt-2 text-gray-800">
        Полный спектр технического обслуживания: закрываем 99% потребностей рядового автомобилиста
      </p>
      <div className="my-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sales.map((item, index) => (
            <div
              key={index}
              onClick={handleNavigateService}
              className="bg-slate-200  flex h-72 rounded-md items-center justify-center relative overflow-hidden ">
              <div className="relative h-full w-full group">
                {' '}
                {/* Добавлено сюда 'group' */}
                {/* Это контейнер для изображения */}
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-125">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full  w-full object-cover transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                {/* Темный фон и текст при наведении */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center  cursor-pointer text-lg font-medium text-white p-24">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact-form">
        <ContactForm />
      </div>

      <div className="mb-4">
        <p className="text-center mt-4 text-3xl font-semibold text-gray-800">
          Марки машин, которые мы обслуживаем
        </p>
        <div className="text-xl">
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default Home;
