import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row justify-center gap-[70px] items-center">
      <img
        src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fwarning.png&w=750&q=75"
        alt="errorImg"
      />
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Sahifa topilmadi</h1>
          <p className="text-gray-400 text-sm">Sahifa o‘chirilgan yoki yangi manzilga ko‘chirilgan</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-base px-7 py-3 w-[230px] rounded-lg bg-[#DD1470] text-white"
        >
          Bosh sahifaga o'tish
        </button>
      </div>
    </div>
  );
};

export default Error;
