import React from "react";
import bannerImage from "../../assets/images/banner.jpg";
function Banner() {
  return (
    <div className=" relative">
      <img
        src={bannerImage}
        alt="banner not found"
        className=" w-full h-full"
      />
      <div className=" w-full h-full absolute top-0 right-0 bottom-0 left-0  bg-gradient-to-b from-transparent to-[#01152B]"></div>
      <div className=" absolute bottom-24 left-12 z-50 p-6 text-white w-[50%] tracking-wide">
        <div className=" flex items-center gap-2">
          <div className="  relative ">
            <div className=" h-2 w-2 inset-0  m-auto absolute rounded-full bg-red-400"></div>
            <div className=" h-3 w-3 animate-ping rounded-full bg-red-400"></div>
          </div>
          <div className=" text-[14px] text-red-400 font-medium ">Live Now</div>
        </div>
        <div className=" font-bold text-3xl mt-3 ">
          For the Fans, By the Fans — Welcome to Webster
        </div>
        <div className=" mt-4 text-[16px] text-gray-300 leading-7">
          Whether it’s Premier League, La Liga, or the World Cup — Webster
          brings the action to your screen. Experience football like true fans
          do.
        </div>
        <div className=" flex mt-6 ">
          <div className=" border p-3 px-8 text-md rounded-full  border-gray-400 text-gray-300 text-[15px]  transition-all duration-500 cursor-pointer hover:border-[#F65311] hover:bg-[#F65311] ">
            Watch Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
