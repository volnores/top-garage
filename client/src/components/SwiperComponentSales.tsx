import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SERVICE } from '../router/routes';

interface Slide {
  title: string;
  img: string;
}

interface SwiperProps {
  slides: Slide[];
}

const SwiperComponentSales: React.FC<SwiperProps> = ({ slides }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
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
      {slides.map((item, index) => (
        <SwiperSlide
          key={index}
          className="bg-slate-400 flex items-center justify-center rounded-md">
          <div className="h-full cursor-pointer ">
            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                navigate(SERVICE);
                window.scrollTo(0, 0); // Прокрутка до верхней части страницы
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponentSales;
