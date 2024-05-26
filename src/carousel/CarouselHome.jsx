import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const CarouselHome = () => {
  const { homeImg } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="w-full xl:w-[50%] xl:h-[320px] 2xl:h-[40px]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#DD1470",
        }}
        spaceBetween={30}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper5"
      >
        {homeImg.map((imgs) => (
          <SwiperSlide key={imgs.id} className="swiper-slide5">
            <div onClick={() => navigate(`/sales/${imgs.id}`)}>
              <img className="carousel-img" src={imgs.img} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselHome;

