import React from 'react'

function  Icon() {
  return (
    <div className='h-[15vh] w-[100%] bg-violet-800 flex justify-center items-center'>
     <div className='h-[10vh] w-[50%] flex items-center gap-2 '>
     <div className='h-[5vh] w-[5%] bg-red-500 rounded-[60px] flex justify-center items-center text-white'>
     <i class="fa fa-youtube-play " aria-hidden="true"></i>
     </div>
     <div className='h-[5vh] w-[5%] bg-blue-500 rounded-[60px] flex justify-center items-center  text-white'>
     <i class="fa fa-facebook-official" aria-hidden="true"></i>
     </div>
     <div className='h-[5vh] w-[5%] bg-blue-400 rounded-[60px] flex justify-center items-center  text-white'>
     <i class="fa fa-twitter" aria-hidden="true"></i>
     </div>
     <div className='h-[5vh] w-[5%] bg-pink-400 rounded-[60px] flex justify-center items-center  text-white'>
     <i class="fa fa-instagram" aria-hidden="true"></i>
     </div>
     <div className='h-[5vh] w-[5%] bg-red-700 rounded-[60px] flex justify-center items-center  text-white'>
     <i class="fa fa-pinterest-square" aria-hidden="true"></i>
     </div>
     <div className='h-[5vh] w-[5%] bg-red-400 rounded-[60px] flex justify-center items-center  text-white'>
     <i class="fa fa-bullseye" aria-hidden="true"></i>
     </div>
    </div>
    <label className='font-semibold text-white flex justify-end items-end'>© Copyright 2023 by ThemePunch OHG</label>
    </div>
  )
}

export default Icon