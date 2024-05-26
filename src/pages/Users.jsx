import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import CarouselCardHome from "../carousel/carouselCardHome";
import CarouselCardHome2 from "../carousel/carouselCardHome2";
import CarouselCardHome3 from "../carousel/carouselCardHome3";
import CarouselCardHome4 from "../carousel/carouselCardHome4"

const Users = () => {
  const { dataUrl, deleteItem, setDataUrl } = useContext(UserContext);
  const { addBas } = useContext(BasketContext);
  const {catalog} = useContext(UserContext)
  const navigate = useNavigate();
  const url = "https://6628965454afcabd07363977.mockapi.io/test";

  const onDelete = (id) => {
    deleteItem(id);

    const newData = dataUrl.filter((v) => v.id !== id);
    setDataUrl(newData);
  };

  const onAddBas = (val) => {
    addBas(val);
  };
  return (
    <div className={`h-full py-8 ${catalog ? 'py-0' : 'py-8'}`}>
      <CarouselCardHome />
      <div>
        <CarouselCardHome2 />
        <CarouselCardHome3 />
        <CarouselCardHome4 />
      </div>
    </div>
  );
};

export default Users;
