import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface Slide {
  title: string;
  img: string;
}

interface SwiperProps {
  slides: Slide[];
}

const SwiperComponentSales: React.FC<SwiperProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={20}
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
      {slides.map((item, index) => (
        <SwiperSlide
          key={index}
          className="bg-slate-200 rounded-md h-40 flex items-center justify-center">
          <div className="m-24">{item.title}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponentSales;
