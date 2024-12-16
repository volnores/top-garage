import React from "react";
import SwiperComponent from "../components/Swiper";
import SwiperComponentSales from "../components/SwiperComponentSales";
import ContactForm from "../components/ContactForm";
import Brands from "../components/Brands";

const sales = [
  { img: "", title: "Замена масла" },
  { img: "", title: "СТО" },
  { img: "", title: "Колодки" },
  { img: "", title: "Кузовной ремонт" },
  { img: "", title: "Диагностика" },
  { img: "", title: "Диагностика" },
];

const Home: React.FC = () => {
  return (
    <div>
      <SwiperComponent />
      <p className="text-3xl font-semibold text-gray-800">
        Выгодные предложения
      </p>
      <div className="flex mt-4 gap-4">
        <SwiperComponentSales slides={sales} />
      </div>
      <p className="text-3xl font-semibold mt-4 text-center text-gray-800">
        Популярные услуги
      </p>
      <p className="text-center mt-2 text-gray-800">
        Полный спектр технического обслуживания: закрываем 99% потребностей
        рядового автомобилиста
      </p>
      <div className="my-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sales.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 flex h-72 rounded-md items-center justify-center"
            >
              {item.title}
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
