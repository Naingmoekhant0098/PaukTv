import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import LiveCard from "../Cards/LiveCard";

import { Link } from "react-router-dom";
// import HomeNewsCard from "../Cards/Card";

interface sliderProps {
  title: string;
  link: string;
  data: any;
}

function NewsSlider({ title, link, data }: sliderProps) {
  return (
    <div className=" mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10">
      <div className=" flex items-center justify-between">
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
          {title}
        </div>
        <Link
          to={link}
          className=" flex items-center gap-1 md:gap-2 border p-2 px-2 md:px-4 cursor-pointer border-gray-300 rounded-full"
        >
          <div className="  text-[12px] md:text-[13px]">View More</div>
          <div>
            <MdNavigateNext />
          </div>
        </Link>
      </div>

      <div className=" mt-4  relative">
        
        {data?.length === 0 && <div>Matches Not Found !</div>}

        <div className="md:h-[400px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="h-[400px] overflow-hidden group rounded-lg">
            <img
              src="https://image-cdn.essentiallysports.com/wp-content/uploads/Al-Nassr-vs-Al-Hilal.jpg?width=900"
              className=" h-full   w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
              alt=""
            />
          </div>
          <div className="h-[400px] grid grid-cols-2 grid-rows-2 gap-3"> 
            <div className=" rounded-lg group overflow-hidden">
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2025/06/2025-06-29T175016Z_94549126_UP1EL6T1DJRE6_RTRMADP_3_SOCCER-CLUB-PSG-MIA-1751219564.jpg?w=770&resize=770%2C469&quality=80"

                  className="   h-full w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                alt=""
              />
            </div>

            <div className=" rounded-lg group overflow-hidden">
              <img
                src="https://image-cdn.essentiallysports.com/wp-content/uploads/Al-Nassr-vs-Al-Hilal.jpg?width=900"
                // src="https://www.aljazeera.com/wp-content/uploads/2025/06/2025-06-29T175016Z_94549126_UP1EL6T1DJRE6_RTRMADP_3_SOCCER-CLUB-PSG-MIA-1751219564.jpg?w=770&resize=770%2C469&quality=80"

                  className="   h-full w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                alt=""
              />
            </div>
            
           
            <div className=" rounded-lg group overflow-hidden">
              <img
                src="https://image-cdn.essentiallysports.com/wp-content/uploads/Al-Nassr-vs-Al-Hilal.jpg?width=900"

                  className="   h-full w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                alt=""
              />
            </div>
          
            
            <div className=" rounded-lg group overflow-hidden">
              <img
               src="https://www.aljazeera.com/wp-content/uploads/2025/06/2025-06-29T173104Z_1948422196_UP1EL6T1CNQDM_RTRMADP_3_SOCCER-CLUB-PSG-MIA-1751218526.jpg?w=770&resize=770%2C544&quality=80"

                  className="   h-full w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;
