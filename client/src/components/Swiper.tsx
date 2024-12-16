import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import serviceImg from '../../public/service.jpeg';
import hand from '../../public/hand.jpg';
import car from '../../public/car.jpg';
import React from 'react';

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
        className="mb-4">
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative"
            style={{ backgroundImage: `url(${serviceImg})` }}>
            <h2 className="text-3xl font-bold relative z-10">Надежный автосервис</h2>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <p className="text-4xl mb-4 font-bold text-customColor relative z-10">
              Ремонт и обслуживание автомобилей <br />
              <span className="text-blue-400">в Раменском</span>
            </p>
            <p className="flex relative z-10 text-lg">
              Профессиональный подход, надежность гарантирована! <br /> Ваше авто — это наша работа,
              наша забота и наша гордость.
            </p>

            <div className="flex flex-col  md:flex-row md:space-x-4 gap-4 mb-4 relative z-10">
              <button className="bg-blue-600 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700">
                Записаться в сервис
              </button>
              <button className="bg-sky-500 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-sky-600">
                Все услуги
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative"
            style={{ backgroundImage: `url(${hand})` }}>
            <h2 className="text-3xl font-bold relative z-10">Ваш авто, наша забота!</h2>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <p className="text-4xl mb-4 font-bold text-customColor relative z-10 ">
              Занимайтесь своими делами, пока ваш автомобиль
              <br />
              <span className="text-orange-300"> в надежных руках</span>
            </p>
            <p className="flex relative z-10 text-lg">
              Ремонтируем только то, что реально требует ремонта. <br />
              Сохраняем дилерскую гарантию.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 gap-4 mb-4 relative z-10">
              <button className="bg-blue-600 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700">
                Узнать о скидках
              </button>
              <button className="bg-green-600 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-green-700">
                Записаться на диагностику
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center bg-blue-400 text-white p-6 rounded-lg min-h-[600px] flex flex-col justify-between relative"
            style={{ backgroundImage: `url(${car})` }}>
            <h2 className="text-3xl font-bold relative z-10">Наши специальные предложения</h2>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <p className="text-4xl mb-4 font-bold text-customColor relative z-10">
              <span className="font-bold text-yellow-400">Скидки</span> для новых клиентов!
            </p>
            <p className="flex relative z-10 text-lg">
              Получите 10% скидки на первый визит. <br /> Спешите воспользоваться уникальными
              предложениями!
            </p>

            <div className="flex flex-col md:flex-row md:space-x-4 gap-4 mb-4 relative z-10">
              <button className="bg-blue-600 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-blue-700">
                Узнать больше
              </button>
              <button className="bg-red-600 min-w-60 text-white py-3 px-4 rounded-md transition duration-300 transform hover:bg-red-700">
                Записаться сейчас
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
