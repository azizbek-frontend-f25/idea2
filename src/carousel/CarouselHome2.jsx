import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useRef, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const CarouselHome2 = () => {
  return (
    <div className="bg-white rounded-xl 2xl:h-[410px] h-[320px]">
      <h1 className="text-2xl px-1 text-start mx-5 py-4">
        Odamlar ko'pincha qidirishadi
      </h1>

      <div className="overflow-y-scroll w-[310px] h-[210px] 2xl:h-[340px] py-4 2xl:w-[350px]">
        <p className="px-1 text-start mx-5 font-semibold text-[16px] pb-3 border-b-2">
          Купить телевизор LG
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Микроволновые печи Hansa
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Sovutgichlar
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Клавиатуры и мышки Trust
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Купить телевизор Premier
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Mikroto'lqinli pechlar Premier
        </p>
        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Soch tekislagichlar Xiaomi
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Аудиоcистемы Xiaomi
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Купить телевизор Xiaomi
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Купить телевизор Samsung
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Купить телевизор Ssmart
        </p>
        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Konditsionerlar Shivaki
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Купить телевизор Artel
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2 border-b-2">
          Электрочайники Shivaki
        </p>

        <p className="px-1 text-start mx-5 font-semibold text-[16px] py-2">
          Купить телевизор Shivkai
        </p>
      </div>
    </div>
  );
};

export default CarouselHome2;
