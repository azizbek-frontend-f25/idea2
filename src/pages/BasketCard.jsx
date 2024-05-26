import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketCard = ({ item }) => {
  const [num, setNum] = useState(1);
  const { delProduct } = useContext(BasketContext);

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
  return (
    <div>
      <div className=" ">
        <div className="px-10 bg-white py-5 flex flex-col lg:flex-row border-b border-gray-100 gap-y-4 justify-between">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex w-full justify-center">
              <img
                className="h-[120px] w-[120px] px-[10px] object-cover"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-6 py-[10px]">
              <h1 className="text-xl">{item.title}</h1>
              <div className="flex gap-6">
                <p className="leading-[22px] w-[280px] text-sm max-h-[43px] overflow-hidden">
                  {item.desc}
                </p>
                <div className="py-1 h-10 w-[110px] items-center gap-5 px-1 flex justify-between border rounded-sm">
                  <button onClick={onMinus}>-</button>
                  <p>{num}</p>
                  <button onClick={onPlus}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-[10px]">
            <button
              onClick={() => delProduct(item.id)}
              className="px-3 py-2 bg-red-500 text-white rounded-2xl"
            >
              delete
            </button>
            <b>{parseInt(item.price * num).toLocaleString("ru")} so'm</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
