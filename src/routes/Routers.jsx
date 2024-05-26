import Root from "../Layout/Root";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Error from "../pages/Error";
import Dynamic from "../pages/Dynamic";
import Sales from "../pages/Sales";
import Shops from "../pages/Shops";
import Likes from "../pages/Likes";
import Scale from "../pages/Scale";
import SalesDynamic from "../pages/SalesDynamic";
import SavolJavob from "../pages/SavolJavob";
import BuyurtmaBerish from "../pages/BuyurtmaBerish";
import BolibTolash from "../pages/BolibTolash";
import Auth from "../pages/Auth";
import Login from "../components/AuthForm/Login";
import Register from "../components/AuthForm/Register";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Dynamic2 from "../pages/Dynamic2";

const privateRoute = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/shops',
        element: <Shops />
      },
      {
        path: "/scale",
        element: <Scale />
      },
      {
        path: "/faq",
        element: <SavolJavob />
      },
      {
        path: "/bolib-tolash",
        element: <BolibTolash />
      },
      {
        path: "/buyurtma-berish",
        element: <BuyurtmaBerish />
      },
      {
        path: '/sales/:id',
        element: <SalesDynamic />
      },
      {
        path: "*",
        element: <Error />
      },
      {
        path: "/products/:id",
        element: <Dynamic />
      },
      {
        path: "/products2/:id",
        element: <Dynamic2 />
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: '/likes',
        element: <Likes />
      },
      {
        path: '/sales',
        element: <Sales />
      },
    ]
  }
]);
const publicRoute = createBrowserRouter([
  {
    path:"*",
    element: localStorage.getItem('token') ? <Navigate to={'/'}/> : <Auth />,
    children: [
      {
        path:'*',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  },
])

const Routers = () => {
  const {isAuth} = useContext(AuthContext)
  return <RouterProvider router={isAuth ? privateRoute : publicRoute}/>;
};

export default Routers;
