import  { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import LiveCard from "../Cards/LiveCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
// import Ads from "../Ads";
// 
interface sliderProps {
  title: string;
  link: string;
  data: any;
  isSwitch :boolean
  setIsAdsShow : (value : boolean)=>void,
  handleCurrentVideo : (item:any , type:string)=>void
}

function Slider({ title, link, data, isSwitch,setIsAdsShow ,handleCurrentVideo}: sliderProps) {
  
  const [currentSwitch,setCurrentSwitch] = useState('today');
  

  return (
  <>
   
    <div className=" mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10">
      <div className=" flex items-center justify-between">
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
         {
          isSwitch  ? <div>{`${currentSwitch==='today'? "Today" : "Tomorrow"} Matches`}</div> :  title
         }
        </div>
        {
          !isSwitch ?  <Link to={link} className=" flex items-center gap-1 md:gap-2 border p-2 px-2 md:px-4 cursor-pointer border-gray-300 rounded-full">
          <div className="  text-[12px] md:text-[13px]">View More</div>
          <div>
            <MdNavigateNext />
          </div>
        </Link>:
        <div className=" border border-gray-500  flex items-center  rounded-full">
        <div onClick={()=>setCurrentSwitch('today')} className={` text-[13px] p-2 md:p-3  px-4 md:px-6 transition-all duration-300 ${currentSwitch ==='today' && 'bg-[#E9376E]' } rounded-full cursor-pointer`}>
          Today
        </div>
        <div onClick={()=>setCurrentSwitch('tomorrow')} className={`transition-all duration-300 text-[13px] p-2 md:p-3  px-4 md:px-6 ${currentSwitch ==='tomorrow' && 'bg-[#E9376E]' } rounded-full cursor-pointer`}>
          Tomorrow
        </div>
          </div>
        }
         
      </div>

      <div className=" mt-4  relative">
        <div  className="hidden md:block absolute top-0  right-0 z-40 h-full w-10 bg-gradient-to-r from-transparent to-[#01152B]"></div>
       {
        !isSwitch && data?.length === 0 && <div>Matches Not Found !</div>
       }
       {
        isSwitch && data?.today?.length === 0 && currentSwitch==='today' && <div>Matches Not Found !</div>
       }
       {
       isSwitch && data?.tomorrow?.length === 0 && currentSwitch==='tomorrow' && <div>Matches Not Found !</div>
       }
        {
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1.4 },  
              344:{ slidesPerView: 1.2 },
              360: { slidesPerView: 1.3 },
              375: { slidesPerView: 1.3 },  
              390: { slidesPerView: 1.4 },
              412: { slidesPerView: 1.5 }, 
              414: { slidesPerView: 1.5 },  
              480: { slidesPerView: 1.6 },  
              540 :{ slidesPerView: 1.9 },
              640: { slidesPerView: 2 }, 
              768: { slidesPerView: 2.3 },  
              912: { slidesPerView: 2.7 },
              1024: { slidesPerView: 2.8 }, 
              1280: { slidesPerView: 4.2}, 
              1440: { slidesPerView: 4.2 },  
              1920: { slidesPerView: 6 },  
              2560: { slidesPerView: 7 },  
            }}
            className="py-6"
          >
            {!isSwitch && data?.map((item: any,i:number) => (
              <SwiperSlide key={i}>
                <LiveCard item={item} setIsAdsShow={setIsAdsShow} handleCurrentVideo={handleCurrentVideo} />
              </SwiperSlide>
            ))}
             {isSwitch && currentSwitch==='today' && data?.today?.map((item: any , i : number) => (
              <SwiperSlide key={i}>
              <LiveCard item={item} setIsAdsShow={setIsAdsShow} handleCurrentVideo={handleCurrentVideo} />
              </SwiperSlide>
            ))}
            {isSwitch && currentSwitch==='tomorrow' && data?.tomorrow?.map((item: any,i:number) => (
              <SwiperSlide key={i}>
               <LiveCard item={item} setIsAdsShow={setIsAdsShow} handleCurrentVideo={handleCurrentVideo} />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div></>
  );
}

export default Slider;
