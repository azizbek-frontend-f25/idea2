import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basData } = useContext(BasketContext);
  const navigate = useNavigate()

  return (
    <div className="container">
      {basData.length !== 0 ? (<div className="grid grid-cols-1 rounded-xl overflow-hidden container">
        {basData.map((items) => (
          <BasketCard key={items.id} item={items}/>
        ))}
      </div>) : (<div className="text-2xl bg-white rounded-2xl px-4 py-14">
        <div className="flex flex-col gap-7 items-center justify-center">
          <img className="w-[340px] mb-3" src="/public/assets/images/basket-empty.webp" alt="img" />
          <h1 className="text-[32px] font-semibold">Savatchada hozircha hech narsa yoʻq</h1>
          <p className="text-sm">Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan foydalanishingiz mumkin</p>
          <button onClick={()=>navigate('/')} className="text-base px-7 py-3 rounded-lg bg-[#DD1470] text-white">Bosh sahifaga o'tish</button>
        </div>
      </div>)}
      
    </div>
  );
};

export default Basket;
