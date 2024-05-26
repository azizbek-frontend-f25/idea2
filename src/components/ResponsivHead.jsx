import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiScalesFill } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { LuHome } from "react-icons/lu";

const ResponsivHead = () => {
  const navigate = useNavigate()
  const { basData } = useContext(BasketContext)
  const onLogOut = () => {
    localStorage.removeItem('token')
  }
  return (
    <div className="flex py-4 items-center fixed w-full bottom-0 bg-white left-0 right-0 justify-between px-3 z-[999] rounded-t-xl">
      <div
        className="flex flex-col items-center justify-center hover:text-[#DD1470] wait cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="flex justify-center text-center">
          <LuHome size={23} className="ms-4" />
          <p className="bg-yellow-400 text-black px-[5px] bottom-1 right-[9px] relative h-full text-[12px] rounded-[50%]">
            { }
          </p>
        </div>
        <p className="text-[12px]">Uy</p>
      </div>
      <div
        className="flex flex-col items-center hover:text-[#DD1470] wait cursor-pointer"
        onClick={() => navigate("/likes")}
      >
        <div className="flex justify-center text-center">
          <FaRegHeart size={23} className="ms-4" />
          <p className="bg-yellow-400 text-black px-[5px] bottom-1 right-[9px] relative h-full text-[12px] rounded-[50%]">
            { }
          </p>
        </div>
        <p className="text-[12px]">Tanlanganlar</p>
      </div>
      <div
        className="flex flex-col items-center hover:text-[#DD1470] wait cursor-pointer"
        onClick={() => navigate("/basket")}
      >
        <div className="flex justify-center text-center">
          <FiShoppingBag size={24} className="ms-4" />
          <p className="bg-yellow-400 px-[5px] text-black bottom-1 right-[9px] relative h-full text-[12px] rounded-[50%]">
            {basData?.length}
          </p>
        </div>
        <p className="text-[12px]">Savatcha</p>
      </div>
      <div
        className="flex flex-col items-center hover:text-[#DD1470] wait cursor-pointer"
        onClick={() => navigate("/scale")}
      >
        <div className="flex justify-center text-center">
          <RiScalesFill size={26} className="ms-4" />
          <p className="bg-yellow-400 text-black px-[5px] bottom-1 right-[9px] relative h-full text-[12px] rounded-[50%]">
            { }
          </p>
        </div>
        <p className="text-[12px]">Taqqoslash</p>
      </div>
      <div onClick={onLogOut} className="flex flex-col items-center hover:text-[#DD1470] wait cursor-pointer">
        <RxPerson size={26} />
        <p className="text-[12px]">Chiqish</p>
      </div>
    </div>
  );
};

export default ResponsivHead;
