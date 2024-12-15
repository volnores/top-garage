import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
      }}
    >
      {slides.map((item, index) => (
        <SwiperSlide
          key={index}
          className="bg-slate-400 rounded-md flex items-center justify-center"
        >
          <div className="h-72">{item.title}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponentSales;
