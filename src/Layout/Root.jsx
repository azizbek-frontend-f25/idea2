import React, { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import Footer from "./Footer";
import { UserContext } from "../context/UserContext";
import ResponsivHead from "../components/ResponsivHead";

const Root = () => {
  const {catalog} = useContext(UserContext)

  return (
    <div>
      <HeaderTop />
      <Header />
      <main className={`bg-gray-100 py-10 ${catalog ? 'py-0' : 'py-10'} px-5 lg:px-0`}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className={`lg:hidden block`}>
        <ResponsivHead />
      </div>
    </div>
  );
};

export default Root;
