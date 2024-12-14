import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface Category {
  title: string;
}

interface CategorySliderProps {
  categories: Category[];
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Установка состояния в зависимости от ширины экрана
  };

  useEffect(() => {
    handleResize(); // Проверка при инициализации компонента
    window.addEventListener('resize', handleResize); // Добавление обработчика события

    return () => {
      window.removeEventListener('resize', handleResize); // Удаление обработчика при размонтировании
    };
  }, []);

  return (
    <div className=" mb-4">
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          {categories.map((category, index) => (
            <SwiperSlide key={index} className=" ">
              <div className="text-base font-semibold rounded-md  flex items-center justify-center cursor-pointer hover:text-indigo-600 transition duration-200 border-2">
                {category.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex space-x-6 text-gray-600 text-sm py-2 px-4  shadow-md">
          {categories.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-indigo-600 text-base font-semibold p-2">
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySlider;
