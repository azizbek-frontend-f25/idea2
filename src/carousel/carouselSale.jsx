import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const CarouselSales = () => {
  const { homeImg } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full lg:h-[310px] 2xl:h-[390px]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#DD1470",
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="swiper5"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {homeImg.map((imgs) => (
          <SwiperSlide key={imgs.id*5} className="swiper-slide5">
            <div className="p-7" onClick={() => navigate(`/sales/${imgs.id}`)}>
              <img className="carousel-img mb-4 rounded-xl" src={imgs.img} alt="img" />
              <h1 id="hideDesc2" className="text-xl max-h-7 overflow-hidden">{imgs.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselSales