// import bannerImage from "../../assets/images/banner1.png";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {  useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
function Banner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["channels"],
    queryFn: matcheService.fetchSliderData,
  });

  console.log(data);
  return (
    <div className=" relative">
      
      <Swiper

        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 5000 }}
        navigation = {{
          nextEl : nextRef.current,
          prevEl : prevRef.current
        }}
      >

        {
          data?.length > 0 && data?.map((dt : any,i : number)=>(
            <SwiperSlide  key={i} className=" text-blue-300 w-full">
            <div className="relative w-full h-[45vh] md:h-[50vh] lg:h-[90vh] ">
              <img
                src={dt?.image}
                alt=" not found"
                className="h-full w-full object-center object-cover"
              />
              <div className=" w-full h-full absolute top-0 right-0 bottom-0 left-0  bg-gradient-to-b from-transparent to-[#01152B]"></div>
              <div className=" absolute bottom-10  md:bottom-10 lg:bottom-18 left-0 md:left-12 z-40 p-6 text-white w-[100%] md:w-[80%] lg:w-[45%] tracking-wide">
                 
                <div className=" font-bold text-xl md:text-3xl mt-1 md:mt-3 ">
                  For the Fans, By the Fans — Welcome to Pauk Tv
                </div>
                <div className=" mt-2 md:mt-4 text-[14px] font-medium md:text-[16px] text-gray-300 leading-7">
                  Whether it’s Premier League, La Liga, or the World Cup — Pauk Tv
                  brings the action to your screen. Experience football like true
                  fans do.
                </div>
  
                <div className=" hidden md:block  mt-3 md:mt-6 ">
                  <div className=" flex">
                    <div  onClick={()=>navigate('/matches')} className=" border p-3 px-8   rounded-full  text-center  border-gray-400 text-gray-300 text-[12px] md:text-[15px]  transition-all duration-500 cursor-pointer hover:border-[#F65311] hover:bg-[#F65311] ">
                      Watch Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          ))
        }

      </Swiper>

      
      <button
  ref={prevRef}
  className="bg-white/5 backdrop-blur-[0.6px] absolute top-1/2 left-0 z-50 -translate-y-1/2 transition-all duration-300 hover:bg-white/10 cursor-pointer text-white p-2"
>
  <GrPrevious size={30} />
</button>

<button
  ref={nextRef}
  className="bg-white/5 backdrop-blur-[0.6px] absolute top-1/2 right-0 z-50 -translate-y-1/2 transition-all duration-300 hover:bg-white/10 cursor-pointer text-white p-2"
>
  <GrNext size={30} />
</button>


      
    </div>
  );
}

export default Banner;
