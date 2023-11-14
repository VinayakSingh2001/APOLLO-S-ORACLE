import React from 'react'

export default function Banner() {
  return (
    <div className='bg-[#CCFFCC] w-full py-[150px]'>
        <div className='max-w-[1240px] mx-auto font-bold text-center py-[100px]' >
            <div className='text-3xl '>
                Welcome to QUIZIFY
            </div>
            
            <div className='md:text-7xl sm:text-6xl text-[#B22222] mt-[10px] md:py-6'>
                Dive into world of quizzes
            </div>
            <div className='md:text-5xl sm:text-4xl text-xl mt-[10px] py-4'>
                Play a quiz or create your own
            </div>

        </div>
    </div>
  )
}
