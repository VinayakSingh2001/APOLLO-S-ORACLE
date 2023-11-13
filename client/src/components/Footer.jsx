import React from 'react'
import sfb from "../assets/img/sfb.svg"
import ins from "../assets/img/instagram.svg"
import xt from "../assets/img/xt.svg"
import ghb from "../assets/img/sgb.svg"

export default function Footer() {
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] w-full  mx-auto py-[10px] px-[8px] grid lg:grid-cols-2 gap-8 text-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>QUIZIFY</h1>
        <p className='py-4'>Created by quiz enthusiasts to help the one who want to learn and test their learning in easy tests.</p>
        <div className='flex justify-between w-[10%] my-6 gap-10'>
          <img src={sfb} alt=""/>
          <img src={ins} alt=""/>
          <img src={xt} alt="" />
          <img src={ghb} alt="" />
        </div>
      </div>
      <div className='lg:col-span-1 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-black'>About</h6>
        </div>
        <div>
          <h6 className='font-medium text-black'>Support</h6>
        </div>
        
        <div>
          <h6 className='font-medium text-black'>Login/Register</h6>
        </div>
      </div>
    </div>
    </div>
  )
}
