import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CarouselSalesHome = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const { dataUrl } = useContext(UserContext);
  const { addBas } = useContext(BasketContext);
  const navigate = useNavigate();

  const onAddBas = (val) => {
    addBas(val);
  };

  return (
    <div className="h-full">
      <h1 className="py-5 text-[25px] font-medium">Oshxona uchun kichik texnika</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#DD1470",
        }}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CarouselSalesHome;
