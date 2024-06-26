import React from 'react'

function NewsLetter() {
  return (
    <div className='h-[100vh]  w-[100%] flex justify-center items-center'>
     <div className='h-[60vh] w-[80%] flex gap-10'>
     <div className=' shadow h-[60vh] w-[32%] flex flex-col pl-[30px] gap-5'>
     
      <h1 className='text-[25px] font-bold'>From The Blog</h1>
     <div className='h-[12vh] w-[93%]  flex gap-5 '>
       <img className='h-[9vh] w-[25%] rounded-[10px] ' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px] hover:text-red-500'>Creative CSS Link Style Example for Eye- Catching sites</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        </div>
       </div>

       <div className='h-[12vh] w-[93%]  flex gap-5'>
       <img className='h-[9vh] w-[25%] rounded-[10px] ' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px]  hover:text-red-500'>CSS Ripple Effect Examples for  Modern Websites</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        </div>
       </div>      

       <div className='h-[14vh] w-[93%] flex gap-5 '>
       <img className='h-[9vh] w-[25%] rounded-[10px] ' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px]  hover:text-red-500'>How to Create an  Employee Spotlight Presentation  Using a Website Slider [Tutorial]</p>
        <h1 className=' text-gray-500 '>TUTORIAL</h1>
        </div>
       </div>
</div>

     <div className='shadow h-[60vh] w-[32%]  flex flex-col gap-3 pl-[30px]'>
     <h1 className='text-[25px] font-bold'>Popular Resources</h1>
     <div className='h-[12vh] w-[93%] flex gap-2 leading-5'>
       <img className='h-[8vh] w-[25%] rounded-[10px] ' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%]  hover:text-red-500'>Optimizing Load Speed and Perfomance</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        <label className='text-[11px] text-gray-400 font-bold'>FAQ</label>
        </div>
       </div>
    
    <div className='h-[12vh] w-[93%]  flex gap-5 leading-5'>
       <img className='h-[8vh] w-[25%] rounded-[10px]' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px] hover:text-red-500'>Quick Setup - Slider Revolution</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        <label className='text-[11px] text-gray-400 font-bold'>FAQ</label>
        </div>
       </div>

     <div className='h-[12vh] w-[93%]  flex gap-5 leading-5'>
       <img className='h-[8vh] w-[25%] rounded-[10px]' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px]  hover:text-red-500'>Create a Basic Reponsive Slider</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        <label className='text-[11px] text-gray-400 font-bold'>VIDEO TUTORIAL</label>
       </div>
       </div>

 <div className='h-[12vh] w-[93%]  flex gap-5 leading-5 '>
       <img className='h-[8vh] w-[25%] rounded-[10px]' src='https://www.sliderrevolution.com/wp-content/uploads/2024/04/css-link-styles-200x113.jpg'></img>
        <div>
        <p className='w-[90%] text-[15px]  hover:text-red-500'>Get Productive Fast</p>
        <h1 className=' text-gray-500'>RESOURCES</h1>
        <label className='text-[11px] text-gray-400 font-bold'>MANUAL</label>
        </div>
       </div>
   </div>


     <div className=' shadow h-[60vh] w-[32%]  flex flex-col gap-6 pl-[30px] '>
     <div className='h-[10vh] w-[100%]  flex justify-center items-center text-[30px] font-bold gap-2'>
     <h1>Newsletter</h1>
     <img className='h-[4vh] w-[12%] ' src='https://www.sliderrevolution.com/wp-content/uploads/2020/02/mailicon-1.png'></img>
     </div>
     <p className='w-[90%]  text-center text-[15px] '>Join over 35.000 others on the Slider Revolution email list to get access to the latest news and exclusive content.</p>
     <button className='color h-[7vh] w-[80%] bg-teal-300 flex  justify-center items-center text-white font-semibold rounded-[50px] text-[22px]  transition-all ml-[40px]'>Subsribe </button>
    </div>
</div>
</div>
  )
}

export default NewsLetter