import React from 'react'
import iconset from "./iconset.png"
export default function Hero() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid grid-cols-3'>
        <div className='col-span-2 w-[95%]'>
            <img src={iconset} alt=""></img>
        </div>
        <div className='flex flex-col justify-center  col-span-1'>
            <h1 className='text-3xl p-2 text-[purple] font-bold'>Start motivating students.In minutes.</h1>
            <p className='text-xl p-2 text-justify'>The best way to ask questions, explore ideas, and let students show what they know.</p>
            <button className='text-xl w-[30%] bg-black text-white p-3 rounded'>Start now</button>
        </div>  
    </div>
  )
}
