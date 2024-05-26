import { Outlet } from "react-router-dom";


const Auth = () => {
  return (
    <div className="bg-gray-100 h-screen w-full">
      <div className="h-full w-full flex flex-col items-center justify-center px-3">
        <Outlet/>
      </div>
    </div>
  )
};

export default Auth;
