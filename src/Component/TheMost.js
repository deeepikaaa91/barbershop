import React, { useState } from "react";

function TheMost() {
  const [showDiv, setShowDiv] = useState(false)
  const [ showDiv1,setshowDiv1] = useState(0)
  return (
    <div className="h-[130vh]   flex flex-col justify-center items-center gap-4">
      <h1 className=" linear-g text-[70px] font-bold">Get The Most</h1>
      <h2 className="text-[45px] font-bold  text-blue-950">
        Out Of This Slider Template
      </h2>
      <h4 className="text-[28px] text-blue-950 w-[50%] text-center font-thin">
        Our in-depth resources will provide you with knowledge and instant
        solutions.
      </h4>

      <div className="h-[50vh] w-[78%]  flex justify-center items-center gap-5">
        <div className="h-[33vh] w-[50%]  flex flex-col gap-5">
          <div onClick={()=> setShowDiv(!showDiv)} style={{height: showDiv == true ? "30vh" : "15vh"}} className=" w-[100%] transition-all overflow-hidden bg-slate-200">
            <h1 className="text-[20px] flex items-center justify-between px-[30px] h-[15vh] font-bold  text-blue-950">
              How To Install This Template ? <span style={{transform: showDiv == true ? `rotate(90deg)` : 'rotate(270deg)', transformOrigin: 'center'}} className="transition-all">{"<"}</span>
            </h1>
            <p className="px-[30px] h-[15vh]  py-2">Check out our comprehensive beginners guide to installing templates.</p>
          </div>
          <div className="h-[15vh] w-[100%] overflow-hidden transition-all  bg-slate-200 flex justify-center items-center flex-col">
            <h1 className="text-[20px] font-bold px-[30px]  text-blue-950 flex items-center justify-center h-[15vh]">
              Getting Started With Slider Revolution <span  className="transition-all">{"<"}</span>
            </h1>
          </div>
        </div>

        <div className="h-[33vh] w-[50%]  flex flex-col gap-5">
          <div  className="h-[15vh] w-[100%]  bg-slate-200 overflow-hidden transition-all flex justify-start items-center">
           <div className=" flex items-center h-[100px] justify-between w-full">
            <h1 className="text-[20px] font-bold px-[30px]  text-blue-950">
              Customise This Template
            </h1>
            <i className="fa fa-caret-down transition-all text-white cursor-pointer "></i>
            </div>
           
           </div>

          <div className="h-[15vh] w-[100%]  bg-slate-200 flex justify-start items-center">
            <h1 className="text-[20px] font-bold px-[30px]  text-blue-950">
              FAQ & Totorial{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMost;
