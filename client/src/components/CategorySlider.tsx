import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ABOUT, BLOG, CONTACTS, HOME, SERVICE, STOCKS } from "../router/routes";

interface Category {
  title: string;
}

interface CategorySliderProps {
  categories: Category[];
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCategoryNavigate = (title: string) => {
    switch (title) {
      case "Услуги":
        navigate(SERVICE);
        break;
      case "О компании":
        navigate(ABOUT);
        break;
      case "Акции":
        navigate(STOCKS);
        break;
      case "Блог":
        navigate(BLOG);
        break;
      case "Контакты":
        navigate(CONTACTS);
        break;
      default:
        navigate(HOME);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Установка состояния в зависимости от ширины экрана
  };

  useEffect(() => {
    handleResize(); // Проверка при инициализации компонента
    window.addEventListener("resize", handleResize); // Добавление обработчика события

    return () => {
      window.removeEventListener("resize", handleResize); // Удаление обработчика при размонтировании
    };
  }, []);

  return (
    <div className="mb-4">
      {isMobile ? (
        <Swiper
          spaceBetween={0} // Убираем пространство между слайдами
          slidesPerView={2} // Устанавливаем 2 слайда на мобильной версии
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0, // Убираем пространство между слайдами
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                onClick={() => handleCategoryNavigate(category.title)}
                className="bg-white border border-gray-300 rounded-md flex items-center justify-center cursor-pointer transition-transform hover:shadow-lg hover:bg-indigo-500 hover:text-white  duration-200 p-4 mx-4 my-4 shadow-md"
              >
                {category.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex bg-gray-50 text-gray-800 text-sm px-4 shadow-md">
          {categories.map((category, index) => (
            <li
              onClick={() => handleCategoryNavigate(category.title)}
              key={index}
              className={`flex-1 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-200 text-base font-semibold p-4 text-center 
              ${index !== 0 ? "border-l border-[rgba(228,228,228,0.8)]" : ""} 
              ${
                index !== categories.length - 1
                  ? "border-r border-[rgba(228,228,228,0.8)]"
                  : ""
              }
              `}
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySlider;
