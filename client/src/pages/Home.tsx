import React from "react";
import SwiperComponent from "../components/Swiper";
import SwiperComponentSales from "../components/SwiperComponentSales";
import ContactForm from "../components/ContactForm";
import Brands from "../components/Brands";
import Oil from "../../public/oil.jpg";
import car from "../../public/car.jpg";
import car1 from "../../public/car1.jpg";
import car2 from "../../public/car2.jpg";
import car3 from "../../public/car3.jpg";
import car4 from "../../public/car4.jpg";
import { useNavigate } from "react-router-dom";
import { SERVICE } from "../router/routes";

//СЖАТЬ ФИНАЛЬНЫЕ ФОТКИ//СЖАТЬ ФИНАЛЬНЫЕ ФОТКИ//СЖАТЬ ФИНАЛЬНЫЕ ФОТКИ//СЖАТЬ //СЖАТЬ ФИНАЛЬНЫЕ ФОТКИ

const sales = [
  { img: Oil, title: "Замена масла" },
  { img: car, title: "СТО" },
  { img: car1, title: "Колодки" },
  { img: car2, title: "Кузовной ремонт" },
  { img: car3, title: "Диагностика" },
  { img: car4, title: "Диагностика" },
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
              onClick={handleNavigateService}
              className="bg-slate-200  flex h-72 rounded-md items-center justify-center relative overflow-hidden "
            >
              <div className="relative h-full w-full group">
                {" "}
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
