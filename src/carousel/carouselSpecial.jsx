import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CarouselSpecial = () => {
  const [ setSwiperRef] = useState(null);
  const { special } = useContext(UserContext);
  const { addBas } = useContext(BasketContext);
  const navigate = useNavigate();

  const onAddBas = (val) => {
    addBas(val);
  };

  return (
    <div>
      <h1 className="py-5 text-[25px] font-medium">
        Siz uchun maxsuz
      </h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#DD1470",
        }}
        onSwiper={setSwiperRef}
        slidesPerView={6}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper4"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {special.map((v) => (
          <SwiperSlide key={v.id} className="swiper-slide4">
            <div className="w-[250px] bg-white py-2 px-[10px] flex flex-col items-start justify-between gap-2 rounded-2xl">
              <div
                onClick={() => navigate(`/products2/${v.id}`)}
                className="flex flex-col px-3 gap-[6px] justify-center"
              >
                <div className="flex justify-center w-full">
                  <img
                    className="w-[100px] text-center mb-6"
                    src={v.img}
                    alt={v.title}
                  />
                </div>
                <b className="text-start text-[#DD1470]">
                  {parseInt(v.price).toLocaleString("ru")} so'm
                </b>
                <p id="hideDesc" className="text-[14px] text-start">
                  {v.desc}
                </p>
                <p className="text-start text-base text-gray-400">
                  Brend:{" "}
                  <span className="text-gray-500 underline hover:text-[#DD1470] cursor-pointer">
                    {v.brend}
                  </span>
                </p>
              </div>
              <div className="flex gap-2 justify-between px-2">
                <button className=" px-2 text-[13px] font-semibold hover:bg-[#DD1470] transition-all duration-200 hover:text-white rounded-xl bg-[#F2F2F2]">
                  Xozirni o'zidayoq xarid qilish
                </button>
                <button
                  onClick={() => onAddBas(v)}
                  className="bg-[#DD1470] px-3 py-3 text-white rounded-lg"
                >
                  <FiShoppingBag size={20} className="" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselSpecial;
