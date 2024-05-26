import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regPassword2, setRegPassword2] = useState('')
  const [result, setResult] = useState('')
  const [status, setStatus] = useState('')
  const test = regUsername.includes('@gmail.com')
  const navigate = useNavigate()
  const {setIsAuth} = useContext(AuthContext)
  const postVal = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', {
        username: test ? regUsername.trim() : `${regUsername.trim()}@gmail.com`,
        password: regPassword,
      })
      setResult(res.data.message)
      setStatus(res.status)
    } catch (error) {
      setResult(error?.response?.data?.message)
    }
  }

  const onRegister = () => {
    if(regPassword === regPassword2){
      postVal()
    } 
  }

  return (
    <div className="flex flex-col items-center justify-center px-10 gap-2 bg-white shadow-md rounded-xl w-full md:w-[450px] py-16">
      {status === 200 && <Navigate to={'/'}/>}
      <h1 className="text-xl ">Ro'yxatdan o'tish</h1>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full">
          <p className="text-gray-500 outline-none text-start">email</p>
          <input onChange={(e) => setRegUsername(e.target.value)} className="w-full bg-transparent py-3 px-2 border rounded-xl outline-[#DD1470]" type="text" />
        </div>
        <input onChange={(e) => setRegPassword(e.target.value)} className="w-full bg-transparent py-3 px-2 border rounded-xl outline-1 outline-[#DD1470]" type="password" placeholder={"parol *"} />
        <input onChange={(e) => setRegPassword2(e.target.value)} className="w-full bg-transparent py-3 px-2 border rounded-xl outline-1 outline-[#DD1470]" type="password" placeholder={"parolni tekshiring *"} />
      </div>
      <p className={`text-start text-red-500 w-full text-sm`}>{result}</p>
      <button onClick={onRegister} className=" mt-3 w-full py-3 px-2 hover:bg-[#bb306f] transition-all duration-200 bg-[#DD1470] text-white rounded-xl">Ro'yxatdan o'tish</button>
      <h1>Akkauntingiz bormi? <button onClick={() => navigate('/login')} className="text-[#DD1470] border-none bg-transparent hover:underline">Kirish</button></h1>
    </div>

  )
};

export default Register;
