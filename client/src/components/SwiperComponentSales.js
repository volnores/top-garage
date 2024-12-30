import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SERVICE } from '../router/routes';
const SwiperComponentSales = ({ slides }) => {
    const navigate = useNavigate();
    return (_jsx(Swiper, { spaceBetween: 20, slidesPerView: 1, breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }, children: slides.map((item, index) => (_jsx(SwiperSlide, { className: "bg-slate-400 flex items-center justify-center rounded-md", children: _jsx("div", { className: "h-full cursor-pointer ", children: _jsx("img", { src: item.img, alt: item.title, onClick: () => {
                        navigate(SERVICE);
                        window.scrollTo(0, 0); // Прокрутка до верхней части страницы
                    } }) }) }, index))) }));
};
export default SwiperComponentSales;
