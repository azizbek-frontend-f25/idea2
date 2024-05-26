import React from "react";

const Kategory = () => {
  const ranCol = parseInt(Math.random() * 7000);
  console.log(ranCol);
  return (
    <div className="mt-10 lg:block hidden">
      <h1 className="text-[25px] font-medium">Kategoriyalar</h1>
      <div className="container flex gap-2 mt-10">
        <div className="w-[25%] h-full flex flex-col justify-between rounded-xl hover:text-white hover:bg-[#DD1470] bg-gray-200 ">
          <h1 className="text-xl pt-2 ps-4  font-medium">Smartfonlar</h1>
          <div className="w-full flex justify-end items-end">
            <img
              className="w-[45%]"
              src="https://istudio-samara.ru/a/istudio/files/multifile/2353/15_Pro_Blue_Titanium_14.webp"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[25%] h-full flex flex-col justify-between transition-all duration-500 hover:text-white hover:bg-[#DD1470] rounded-xl bg-gray-200">
          <h1 className="text-xl font-medium ps-4 pt-2">
            Kir yuvish mashinalari
          </h1>
          <div className="w-full flex justify-end items-end">
            <img
              className="w-[45%]"
              src="https://pngimg.com/d/washing_machine_PNG15570.png"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[12.5%] h-full flex flex-col justify-between  transition-all duration-500 hover:text-white hover:bg-[#DD1470] rounded-xl bg-gray-200">
          <h1 className="text-xl font-medium ps-4 pt-2">Televizo'rlar</h1>
          <div className="w-full h-[90%] flex justify-end items-end">
            <img
              className="w-[95%] object-cover"
              src="https://apim.canadiantire.ca/v1/product/api/v1/product/image/3999846p?baseStoreId=CTR&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640&impolicy=mZoom"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[12.5%] h-full flex flex-col justify-between transition-all duration-500 hover:text-white hover:bg-[#DD1470] rounded-xl bg-gray-200">
          <h1 className="text-xl font-medium ps-4 pt-2">Gaz plitasi</h1>
          <div className="w-full h-[90%] flex justify-end items-end">
            <img
              className="w-[70%] object-cover"
              src="https://pngimg.com/d/gas_stove_PNG67.png"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[25%] flex flex-col justify-between gap-2">
          <div className="h-[50%] flex bg-gray-200 rounded-xl transition-all duration-500 hover:text-white hover:bg-[#DD1470]">
            <h1 className="text-xl font-medium ps-5 pt-4">Noutbuklar</h1>
            <div className="w-full h-full flex justify-end items-end">
              <img
                className="w-[45%] object-cover"
                src="https://www.transparentpng.com/thumb/laptop/YmlelI-laptops-png-images-notebook-png-image-laptop.png"
                alt="img"
              />
            </div>
          </div>
          <div className="h-[50%] flex bg-gray-200 rounded-xl transition-all duration-500 hover:text-white hover:bg-[#DD1470]">
            <h1 className="text-xl font-medium ps-5 pt-4">Oshxona uchun texnika</h1>
            <div className="w-full h-full flex justify-end items-end">
              <img
                className="w-[65%] object-cover"
                src="https://pngimg.com/d/microwave_PNG15712.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategory;
