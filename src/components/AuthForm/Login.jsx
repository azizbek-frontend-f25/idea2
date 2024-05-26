import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const [logUsername, setLogUsername] = useState('')
  const [logPassword, setLogPassword] = useState('')
  const [Res,setRes] = useState('')
  const navigate = useNavigate()
  const test = logUsername.includes('@gmail.com')
  
  const postLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: test ? logUsername.trim() : `${logUsername.trim()}@gmail.com`,
        password: logPassword,
      })
      console.log(res);
      setRes(res.data.message)
      
      if(res.status === 200){
        setIsAuth(true)
        localStorage.setItem("token", JSON.stringify(res.data.token))
      }
    } catch (error) {
      setRes(error?.response?.data?.message)
      console.log(error);
    }
  }

  const onLogin = () => {
    postLogin()
  }
  return (
    <div className="flex flex-col items-center justify-center py-14 px-10 gap-6 bg-white shadow-md rounded-xl w-full md:w-[450px]">
      <h1 className="text-xl ">Kirsh</h1>
      <div className="w-full">
        <p className="text-gray-500 outline-none text-start">email</p>
        <input onChange={(e) => setLogUsername(e.target.value)} className="w-full bg-transparent py-3 px-2 border rounded-xl outline-[#DD1470]" type="text" vocab="+998" />
      </div>
      <div className="w-full">
        <input onChange={(e) => setLogPassword(e.target.value)} className="w-full bg-transparent py-3 px-2 border rounded-xl outline-1 outline-[#DD1470]" type="password" placeholder={"parol *"} />
        <p className="text-sm text-red-500">{Res}</p>
      </div>
      <button onClick={onLogin} className="w-full py-3 px-2 hover:bg-[#bb306f] transition-all duration-200 bg-[#DD1470] text-white rounded-xl">Kirish</button>
      <h1>Akkauntingiz yo'qmi? <button onClick={() => navigate('/register')} className="text-[#DD1470] border-none bg-transparent hover:underline">Royxatan o'tish</button></h1>
    </div>
  )
};

export default Login;
