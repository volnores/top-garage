import React from 'react';
import SwiperComponent from '../components/Swiper';
import SwiperComponentSales from '../components/SwiperComponentSales';
import ContactForm from '../components/ContactForm';

const sales = [
  { img: '', title: 'Замена масла' },
  { img: '', title: 'СТО' },
  { img: '', title: 'Колодки' },
  { img: '', title: 'Кузовной ремонт' },
  { img: '', title: 'Диагностика' },
  { img: '', title: 'Диагностика' },
];

const Home: React.FC = () => {
  return (
    <div>
      <SwiperComponent />
      <p className="text-3xl font-semibold mt-4">Выгодные предложения</p>
      <div className="flex mt-4 gap-4">
        <SwiperComponentSales slides={sales} />
      </div>
      <p className="text-3xl font-semibold mt-4 text-center">Услуги автосервиса</p>
      <p className="text-center">
        Полный спектр технического обслуживания: закрываем 99% потребностей рядового автомобилиста
      </p>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sales.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 flex h-60 rounded-md items-center justify-center">
              {item.title}
            </div>
          ))}
        </div>
        <p className="text-center mt-4">Все услуги</p>
      </div>
      <ContactForm />
      <div className="mb-4">
        <p className="text-center mt-4 text-xl font-semibold">
          Марки автомобилей, которые мы обслуживаем
        </p>
      </div>
    </div>
  );
};

export default Home;
