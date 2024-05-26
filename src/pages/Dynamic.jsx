import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { FiShoppingBag } from "react-icons/fi";

const Dynamic = () => {
  let params = useParams();
  const [item, setItem] = useState([]);
  const [num, setNum] = useState(1);
  const { url } = useContext(UserContext);
  const { addBas } = useContext(BasketContext);
  const [getError, setGetError] = useState("");
  const toArr = Object.keys(item)

  const Loading = async () => {
    try {
      const res = await axios.get(`${url}/${params.id}`);
      setItem(res.data);
    } catch (error) {
      setGetError(error.response.data);
    }
  };

  useEffect(() => {
    Loading();
  }, [params]);

  const onMinus = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const onPlus = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };

  const onAddBas = (val) => {
    addBas(val);
  };

  return (
    <div className="container">
      {toArr.length === 0 && <h1 className="absolute text-4xl top-0 left-0 w-full h-full opacity-90 flex items-center justify-center bg-gray-200  text-white">LOADING...</h1>}
      {getError.length > 0 ? (
        <h1 className="text-6xl text-center mt-[200px]">{getError} <span className="block text-4xl">go back</span></h1>
      ) : (
        <div className="flex py-5 gap-[130px] bg-white rounded-xl">
          <img
            className="w-[415px] h-[550px] object-cover rounded-sm"
            src={item.img}
            alt={item.title}
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 py-5 border-b-2">
              <h1 className="text-xl">{item.title}{item.title}</h1>
              <p className="w-[450px]">{item.desc}</p>
            </div>
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-3">
                <p>theme: nature</p>
                <img
                  className="w-[70px] h-[85px] rounded-lg"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1>quantity :</h1>
                <div className="py-1 h-10 w-[110px] items-center gap-5 px-1 flex justify-between border rounded-sm">
                  <button onClick={onMinus}>-</button>
                  <p>{num}</p>
                  <button onClick={onPlus}>+</button>
                </div>
              </div>
              <div>
                <h1>price:</h1>
                <b className="text-2xl">
                  {parseInt(item.price * num).toLocaleString("ru")} so'm
                </b>
              </div>
              <div>
                <button
                  onClick={() => onAddBas(item)}
                  className="bg-[#DD1470] px-3 py-3 text-white rounded-xl"
                >
                  <FiShoppingBag size={28} className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dynamic;