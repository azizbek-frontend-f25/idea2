import React, { useContext } from 'react'
import Users from './Users'
import CarouselHome from '../carousel/CarouselHome'
import CarouselHome2 from '../carousel/CarouselHome2'
import { useNavigate } from 'react-router-dom'
import CarouselSpecial from '../carousel/carouselSpecial'
import CarouselSales from '../carousel/carouselSale'
import Kategory from './Kategory'
import { UserContext } from '../context/UserContext'
import ResponsivHead from '../components/ResponsivHead'

const Home = () => {
  const navigate = useNavigate()
  const { catalog } = useContext(UserContext)
  return (
    <div className='container'>
      <div className={`flex items-center gap-5 justify-between`}>
        <CarouselHome />
        <img onClick={() => navigate("/bolib-tolash")} className='hidden xl:block w-[25%] 2xl:w-[350px] h-[320px] 2xl:h-[410px] rounded-xl' src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FAugust2023%2F1zxcgEfO8opa86eR9Wfs.png&w=1920&q=75" alt="img" />
        <div className='hidden xl:block'>
          <CarouselHome2 />
        </div>
      </div>
      <Users />
      <div>
        <CarouselSales />
        <CarouselSpecial />
        <Kategory />
      </div>
    </div>
  )
}

export default Home