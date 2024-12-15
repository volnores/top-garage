import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

import React from "react";

const SwiperComponent: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        className="mb-4"
      >
        <SwiperSlide>
          <div className="bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between">
            <h2 className="text-2xl font-bold">Сервис 1</h2>
            <p className="text-3xl mb-4 font-bold text-customColor">
              Ремонт и обслуживание автомобилей{" "}
              <span className="text-orange-300">в Раменском</span>
            </p>
            <p className=" flex">
              Ремонтируем только то, что реально требует ремонта. Сохраняем
              дилерскую гарантию.
            </p>

            <div className="flex flex-col md:flex-row md:space-x-4 gap-4 mb-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:bg-blue-400">
                Записаться в сервис
              </button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:bg-gray-400 ">
                Все услуги
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-green-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between">
            <h2 className="text-2xl font-bold">Сервис 2</h2>
            <p>Описание услуги 2.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-red-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between">
            <h2 className="text-2xl font-bold">Сервис 3</h2>
            <p>Описание услуги 3.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
