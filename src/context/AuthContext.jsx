import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("token"))
  const [isAuth, setIsAuth] = useState(user ? true : false);
  const [log,setLog] = useState(false)
  return <AuthContext.Provider value={{log,setLog,isAuth,setIsAuth}}>{children}</AuthContext.Provider>
};
export default AuthProvider;
