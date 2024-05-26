import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiScalesFill, RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu, RxPerson } from "react-icons/rx";
import Test from "../pages/Test";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { data, catalog, setCatalog, setCatalog2, catalog2 } = useContext(UserContext);
  const { basData } = useContext(BasketContext);
  const navigate = useNavigate();
  // const [search,setSearch] = (true)
  const onSearch = (value) => {
    console.log(value);
  }
  const offSearch = (value) => {
    console.log(value);
  }
  const onLogOut = () => {
    localStorage.removeItem('token')
  }
  const onCatalog = () => {
    setCatalog(!catalog)
    setCatalog2(!catalog2)
  }
  console.log();
  return (
    <div className="top-[0px] w-full bg-white px-1 lg:px-0" id="stick">
      <div className="container">
        <div className="flex justify-between items-center bg-white py-2">
          <svg
            width="80"
            height="32"
            viewBox="0 0 105 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate("/")}
          >
            <path
              d="M1.17175 1.219C-0.390585 2.77717 -0.390585 5.20844 1.17175 6.82033C2.78797 8.3785 5.22575 8.3785 6.78809 6.82033C8.41778 5.20844 8.41778 2.77717 6.84197 1.219C5.27963 -0.406332 2.73409 -0.406332 1.17175 1.219Z"
              fill="#DD1470"
            ></path>
            <path
              d="M7.13832 12.314H0.875488V41.2207H7.13832V12.314Z"
              fill="#DD1470"
            ></path>
            <path
              d="M57.9949 11.5619C53.5368 11.5619 49.8195 13.0126 46.9777 15.9543C44.7015 18.2782 43.3277 21.0587 42.8698 24.2959C42.8698 24.3228 42.8429 24.3362 42.8294 24.3362H40.1492C40.1222 24.3362 40.1088 24.3228 40.1088 24.2959V0.802503C40.1088 0.775638 40.0953 0.762207 40.0684 0.762207H33.8998C33.8729 0.762207 33.8594 0.775638 33.8594 0.802503V16.3036C33.8594 16.3439 33.8055 16.3573 33.7786 16.3305C31.4082 13.1604 28.068 11.5754 23.7177 11.5754C19.7175 11.5754 16.3639 13.0261 13.5221 15.9678C10.6802 18.9095 9.29297 22.496 9.29297 26.7809C9.29297 30.9987 10.6802 34.6389 13.5221 37.5941C16.3639 40.5358 19.7175 41.9865 23.7177 41.9865C28.0814 41.9865 31.4082 40.4014 33.7786 37.1777C33.8055 37.1508 33.8594 37.1642 33.8594 37.2045V41.194C33.8594 41.2208 33.8729 41.2343 33.8998 41.2343H40.0684C40.0953 41.2343 40.1088 41.2208 40.1088 41.194V29.4943C40.1088 29.4674 40.1222 29.454 40.1492 29.454H42.8563C42.8833 29.454 42.8967 29.4674 42.8967 29.4943C43.3816 32.7046 44.7554 35.4449 47.0315 37.7284C49.9273 40.5626 53.7523 41.9999 58.4528 41.9999C64.0557 41.9999 68.2848 39.9313 71.1131 35.7404C71.1266 35.7135 71.1266 35.6867 71.0997 35.6732L66.0221 32.7046C66.0086 32.6912 65.9817 32.7046 65.9682 32.7181C64.2846 35.0688 61.8064 36.2642 58.5201 36.2642C53.7254 36.2642 50.2101 33.8598 49.2538 29.4943C49.2538 29.4674 49.2673 29.4405 49.2943 29.4405H72.2714C72.2984 29.4405 72.3118 29.4271 72.3118 29.4003C72.4869 28.3257 72.5408 27.466 72.5408 26.8346C72.5408 22.6168 71.1535 18.9766 68.4329 16.0215C65.6988 13.0664 62.224 11.5619 57.9949 11.5619ZM40.1088 29.3734C40.1088 29.4003 40.0953 29.4137 40.0684 29.4137H33.5631C33.5496 29.4271 33.5362 29.4271 33.5227 29.4405C33.1186 30.9316 32.3644 32.2479 31.26 33.4031C29.5226 35.1359 27.3137 36.009 24.7143 36.009C23.6099 36.009 22.5863 35.8478 21.6435 35.5389C21.6031 35.4852 21.5762 35.4314 21.5223 35.3777V32.1002C21.5223 32.0062 21.455 31.939 21.3607 31.939H15.5962C15.4885 31.939 15.4076 31.8584 15.4076 31.7509V29.0913C15.4076 28.9973 15.4884 28.9167 15.5827 28.9167H21.3742C21.4684 28.9167 21.5358 28.8495 21.5358 28.7555V24.981C21.5358 24.8869 21.4684 24.8198 21.3742 24.8198H15.6097C15.5019 24.8198 15.4211 24.7392 15.4211 24.6317V21.9721C15.4211 21.8781 15.5019 21.7975 15.5962 21.7975H21.3876C21.4819 21.7975 21.5493 21.7303 21.5493 21.6363V18.1304C21.5897 18.0767 21.6166 18.0229 21.657 17.9692C22.6133 17.6603 23.6369 17.4856 24.7278 17.4856C27.3407 17.4856 29.536 18.3588 31.2735 20.1453C32.4452 21.3139 33.2129 22.6974 33.59 24.269C33.6035 24.2825 33.617 24.2959 33.6304 24.2959H40.0818C40.1088 24.2959 40.1222 24.3093 40.1222 24.3362V29.3734H40.1088ZM66.1702 24.3362H49.2404C49.2134 24.3362 49.1865 24.3093 49.2 24.2825C50.0889 19.9169 53.3213 17.2304 57.941 17.2304C62.0354 17.2304 65.3352 19.6348 66.2241 24.2825C66.2241 24.3093 66.1972 24.3362 66.1702 24.3362Z"
              fill="#DD1470"
            ></path>
            <path
              d="M98.7373 16.4114C96.3669 13.1742 92.9998 11.5488 88.5956 11.5488C84.5955 11.5488 81.2418 12.9995 78.4 15.9413C75.5582 18.883 74.1709 22.4694 74.1709 26.7544C74.1709 30.9722 75.5582 34.6124 78.4 37.5675C81.2418 40.5093 84.5955 41.96 88.5956 41.96C92.9998 41.96 96.3669 40.3346 98.7373 37.0437V41.2077H105V12.3145H98.7373V16.4114ZM96.1379 33.4035C94.4005 35.1363 92.1917 36.0094 89.5923 36.0094C86.9794 36.0094 84.784 35.1363 83.0466 33.4035C81.3092 31.617 80.4337 29.414 80.4337 26.7544C80.4337 24.0948 81.3092 21.8918 83.0466 20.1591C84.784 18.3725 86.9929 17.4994 89.5923 17.4994C92.2051 17.4994 94.4005 18.3725 96.1379 20.1591C97.8754 21.8918 98.7508 24.0948 98.7508 26.7544C98.7373 29.414 97.8754 31.617 96.1379 33.4035Z"
              fill="#DD1470"
            ></path>
          </svg>
          <div onClick={onCatalog} className="flex cursor-pointer  lg:bg-[#DD1470] items-center px-3 text-sm font-semibold py-[10px] rounded-lg text-white gap-2">
            <h1 className="lg:block hidden">Mahsulotlar katalogi</h1>
            <div className="flex flex-col lg:max-h-[10px] justify-center gap-[3px]">
              <div className={`${catalog ? 'hidden' : 'block'}`}>
                <RxHamburgerMenu size={25} className="text-[#DD1470 lg:text-white" />
              </div>
              <div className={`duration-1000 ${catalog ? 'block' : 'hidden'}`}>
                <IoMdClose size={25} className="text-[#DD1470] lg:text-white"/>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-[700px] items-center bg-gray-100 px-5 rounded-xl">
            <input
              className="text-[12px] outline-none text-black w-full  bg-transparent px-5 py-[13px] rounded-s-lg h-full"
              onFocus={() => onSearch(true)}
              placeholder="Mahsulot qidirish"
              type="text"
            />
            <RiSearchLine
              color="gray"
              size={19}
              className="bg-[#F2F2F2] h-[43px] rounded-e-lg"
            />
          </div>
          <div className='lg:flex gap-5 py-4 items-center hidden'>
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
        </div>
        <div className={`${catalog ? "block" : 'hidden'}`}>
          <ul>
            <Test />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
