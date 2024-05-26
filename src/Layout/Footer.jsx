import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#282F3C]">
        <div className="container flex-col lg:flex-row flex justify-between items-center py-10 gap-10 lg:gap-[270px] text-white">
          <div className="flex flex-col gap-4">
            <img
              className="w-[110px]"
              src="/public/assets/images/blackLogo.png"
              alt="blackLogo"
              onClick={() => navigate("/")}
            />
            <div className="flex gap-3">
              <a href="https://t.me/ideastore_uz" target="_blank">
                <div className="hover:bg-blue-500 py-2 px-2 hover:border-blue-500 w-[37px] flex justify-center items-center border rounded-[50%]">
                  <FaTelegramPlane size={20} />
                </div>
              </a>
              <a href="https://www.facebook.com/ideastore.uz/" target="_blank">
                <div className="hover:bg-blue-900 py-2 px-2 hover:border-blue-900 w-[37px] flex justify-center items-center border rounded-[50%]">
                  <CgFacebook size={20} className="" />
                </div>
              </a>
              <a href="https://www.instagram.com/ideastore.uz/" target="_blank">
                <div className="hover:bg-pink-500 py-2 px-2 hover:border-pink-500 w-[37px] flex justify-center items-center border rounded-[50%]">
                  <FaInstagram size={20} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col px-4 gap-5 lg:gap-0 lg:flex-row justify-between w-full">
            <div className="flex flex-col gap-1 lg:gap-4">
              <h1 className="text-lg">Xaridorlarga</h1>
              <div className="flex flex-col gap-2">
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/faq"}
                >
                  savol-javob
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Sayta buyurtma berish
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-1 lg:gap-4">
              <h1 className="text-lg">idea.uz</h1>
              <div className="flex flex-col gap-2">
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/faq"}
                >
                  Biz haqimizda
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Bizning do'konlarimiz
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Aloqa
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-1 lg:gap-4">
              <h1 className="text-lg">Malumot</h1>
              <div className="flex flex-col gap-2">
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/faq"}
                >
                  Maqolalar
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Muddatli to'lov
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Oferta
                </Link>
                <Link
                  className="text-gray-500 text-sm hover:text-[#DD1470]"
                  to={"/buyurtma-berish"}
                >
                  Vakansiyalar
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-1 lg:gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl">Qayta aloqa</h1>
                <button className="py-2 px-3 border border-white bg-transparent rounded-lg hover:border-[#DD1470] hover:text-[#DD1470]">
                  Xabar qoldirish
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl hover:text-[#DD1470]">71 230 77 99</h1>
                <p className="text-gray-500 text-sm">
                  Har kuni 9:00dan 21:00gacha
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl hover:text-[#DD1470]">
                  info@ideastore.uz
                </h1>
                <p className="text-gray-500 text-sm">Pochta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container flex justify-between py-3">
          <p className="text-gray-500">2023 © «idea.uz - интернет-магазин»</p>
          <p className="text-gray-500">Sayt yaratuvchisi-Azizbek</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
