import React from "react";
import { useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const HeaderTop = () => {
  const navigate = useNavigate();
  const {catalog2} = useContext(UserContext)
  return (
    <div className={`bg-gray-100 lg:block hidden`}>
      <div className="container py-2 flex justify-between items-center">
        <div className="flex gap-[50px] items-center">
          <div
            className="flex gap-2 cursor-pointer items-center"
            onClick={() => navigate(`/sales`)}
          >
            <RiDiscountPercentFill color={"#DD1470"} size={25} />
            <p className="text-sm">Aksiya va chegirmalar</p>
          </div>
          <div
            className="flex gap-2 cursor-pointer items-center"
            onClick={() => navigate("/shops")}
          >
            <HiLocationMarker color={"#DD1470"} size={25} />
            <p className="text-sm">Do'konlar</p>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex gap-2 cursor-pointer items-center">
            <BsTelephoneFill color={"#DD1470"} size={16} />
            <p className="text-sm">71 230 77 99</p>
          </div>
          <select className="cursor-pointer outline-none">
            <option> 🇺🇿 UZB</option>
            <option> 🇷🇺 RUS</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
