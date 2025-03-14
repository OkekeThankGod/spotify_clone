import React from 'react'
import { assets } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
    <div  className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)}  className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-5'>
          <p className='bg-white text-red-400 text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer '>Explore Premium</p>
          <p className='bg-blue-400 py-1 px-4 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
          <p className='bg-purple-600 text-yellow-400 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer '>Y</p>
        </div>
    </div>
    <div className='flex items-center gap-3 mt-5'>
      <p className='text-black rounded-2xl bg-white px-4 py-1 cursor-pointer'>All</p>
      <p className='bg-black px-4 py-3 rounded-2xl text-[15px] cursor-pointer'>Music</p>
      <p className='bg-black px-4 py-3 rounded-2xl text-[15px] cursor-pointer'>PodCast</p>
    </div>
    </>
  )
}
