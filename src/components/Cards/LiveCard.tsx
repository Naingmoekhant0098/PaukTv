import React from "react";

function LiveCard() {
  return (
    <div className="rounded-[10px] border border-white/5 bg-white/5 backdrop-blur-[0.6px] w-[250px] md:w-[294px] p-4 md:p-6">
      <div className=" flex items-center justify-between">
        <div className=" font-medium">OFC OWC</div>
        <div className=" flex items-center gap-2">
          <div className="  relative ">
            <div className=" h-2 w-2 inset-0  m-auto absolute rounded-full bg-red-400"></div>
            <div className=" h-3 w-3 animate-ping rounded-full bg-red-400"></div>
          </div>
          <div className=" text-[12px] text-red-400  ">Live Now</div>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-6">

        <div className=" flex items-center flex-col justify-center text-center ">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/420px-Manchester_United_FC_crest.svg.png"  alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16" />
            <div  className=" text-[13px] md:text-[14px] mt-3">
            Manchester United F.C.
            </div>
        </div>

        <div className=" flex items-center -mt-10 gap-1">
           <div className="  text-[16px] font-semibold">
            2
           </div>
           <div>
            -
           </div>
           <div className="  text-[16px] font-semibold">3</div>
        </div>

        <div className=" flex items-center flex-col justify-center text-center ">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/420px-Manchester_City_FC_badge.svg.png" alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16" />
            <div className=" text-[13px] md:text-[14px] mt-3">
            Manchester City F.C.
            </div>
        </div>
      </div>

      <div className=" border p-3 px-8   rounded-full  text-center mt-6 border-gray-400 text-gray-300 text-[13px] md:text-[15px]  transition-all duration-500 cursor-pointer hover:border-[#F65311] hover:bg-[#F65311] ">
            Watch Now
          </div>
    </div>
  );
}

export default LiveCard;
