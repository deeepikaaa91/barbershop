import React from "react";

function Barbershop() {
  return (
    <div className=" lin-gre lg:h-[100vh]  h-[160vh] w-[100%] flex flex-col items-center gap-5 ">
      <div className=" flex flex-col justify-center w-[80%] gap-4 items-center ">
        <label className="text-[18px] text-red-500 lg:text-start text-center">
          SLIDER REVOLUTION HERO, ONE PAGE WEBSITE, SLIDER TEMPLATE
        </label>
        <h1 className=" lg:text-[40px]  text-[35px] font-bold  text-blue-950 text-center lg:text-start">
          Barber Shop Website
        </h1>
        <p className=" lg:text-[30px] text-center font-thin text-blue-950 text-[25px] w-[80%]">
          A beautiful one pager website with a unique look and feel. Built
          inside your WordPress surroundings.
        </p>
      </div>

      <div className=" h-[80vh] w-[80%] flex lg:flex-row flex-col gap-10 ">
        <div className="h-[50vh] flex w-[90%]  bg-yellow-300">
          <img
            className=" rounded w-[100%] "
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/04/barber_shop.jpg"
          ></img>
        </div>
        <div className="h-[50vh] w-[80%]  flex flex-col  gap-5">
          <h1 className="lg:text-[34px] text-[28px] lg:w-[100%] w-[120%] font-bold text-blue-950">Slider Revolution Templates Are 100% Responsive</h1>
          <p className="text-[19px] lg:w-[84%] w-[125%] text-blue-950">We designed the Barber Shop Website to look good no matter what device your visitors are on.
          We’ve also given you an easy-to-use responsive editor that allows you to edit and preview your Slider Revolution module from different views.</p>
         </div>
      </div>
      <button className=" button-col h-[6vh]  lg:w-[37%] w-[90%] bg-red-500 rounded-[22px] font-bold text-white">Get This Template When You  Sign Up For Slider Revolution</button>
    </div>
  );
}

export default Barbershop;
