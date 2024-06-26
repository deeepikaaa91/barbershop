import React from "react";

function Slider() {
  return (
    <div className="lg:h-[130vh] h-[200vh]   flex flex-col justify-center items-center gap-5">
      <h1 className=" linear lg:text-[70px] bg-green-400 text-[40px] font-bold">
        Why Should You
      </h1>
      <h2 className="lg:text-[50px] w-[70%] text-center text-[36px] font-bold  text-blue-950">
        Use This Slider Revolution Templates?
      </h2>
      <h4 className="lg:text-[30px] w-[70%] text-[20px] text-center text-blue-950">
        We’ll give you 3 very good reasons…
      </h4>
      <div className="lg:h-[60vh] w-[80%] lg:gap-0 gap-10 flex lg:flex-row flex-col  justify-between">
        <div className=" shadow lg:h-[60vh] lg:w-[30%] bg-white py-4 lg:py-0  flex flex-col justify-center items-center gap-5">
          <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
          <h1 className="lg:text-[30px] text-[20px] text-center w-[80%] font-bold">
            Instantly Captures Visitors’ Attention
          </h1>
          <p className="text-[18px] w-[87%] text-center text-gray-400 ">
            Half of the battle in getting people to engage with your website
            lies in getting them to stop and pay attention to your content. Your
            visitors aren’t likely to encounter websites that use a cool slider
            like this one, so consider the battle won.
          </p>
        </div>

        <div className=" shadow lg:h-[60vh] lg:w-[30%] bg-white  flex flex-col justify-center items-center gap-5">
          <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
          <h1 className="lg:text-[30px] text-[22px] text-center w-[80%] font-bold ">
            Customizations As Easy As 1-2-3
          </h1>
          <p className="text-[18px] w-[87%] text-center text-gray-400 ">
            You might be looking at this Slider Revolution template and
            wondering how the heck you’re going to repurpose it for your needs.
            Don’t worry. Whether you want to edit the logo, change the images,
            or add new text to the sliders, it can easily be done within
            minutes..
          </p>
        </div>

        <div className=" shadow lg:h-[60vh] lg:w-[30%] bg-white  flex flex-col justify-center items-center gap-5">
          <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
          <h1 className=" lg:text-[30px]  text-[24px] text-center w-[80%] font-bold">
            Wide Range Of Use Cas
          </h1>
          <p className="text-[18px] w-[87%] text-center text-gray-400 ">
            The beauty of this Slider Revolution template is you can use it for
            a wide variety of websites and business purposes. You can… show off
            your products. Tell your brand’s story. And much more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
