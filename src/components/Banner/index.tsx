// import bannerImage from "../../assets/images/banner1.png";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
import phones from "../../assets/images/phone.png";
import playStore from "../../assets/images/playstore.png";
 
import { FaDownload } from "react-icons/fa";
function Banner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["slider"],
    queryFn: matcheService.fetchSliderData,
  });

   const { data:version } = useQuery({
      queryKey: ["versions"],
      queryFn: matcheService.fetchVersion,
    });
    

  return (
    <div className=" relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 10000 }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
      >
        {data?.length > 0 &&
          data?.map((dt: any, i: number) => (
            // <SwiperSlide key={i} className=" text-blue-300 w-full">
            //   <div className="relative w-full h-[45vh] md:h-[50vh] lg:h-[90vh] ">
            //     <img
            //       src={dt?.image}
            //       alt=" not found"
            //       className="h-full w-full object-center object-cover"
            //     />
            //     <div className=" w-full h-full absolute top-0 right-0 bottom-0 left-0  bg-gradient-to-b from-transparent via-[#01152bb1] to-[#01152B]"></div>
            //     <div className="absolute inset-0 flex items-center justify-center">
            //     <div className="w-full md:w-[80%]   lg:w-[80%]  flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            //         <div className="w-full md:w-2/3">
            //           <div className="font-bold text-white text-md leading-relaxed tracking-wider md:text-3xl mt-3">
            //           Never Miss a Match — Download the Boss TV App Today!

            //           </div>
            //           <p className="mt-4 text-sm md:text-base text-gray-300 leading-7">
            //           Live-stream top football leagues, catch highlights, and stay updated on your favorite teams — all from your pocket. Premier League, La Liga, World Cup and more — anytime, anywhere.

            //           </p>

            //           <div className="hidden md:flex mt-6 gap-4 flex-wrap">
            //             <a
            //               href="https://play.google.com/store/apps/details?id=com.pauktv.app"
            //               target="_blank"
            //               rel="noopener noreferrer"
            //               className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-full text-gray-300 text-sm transition duration-500 hover:border-green-500 hover:bg-green-500"
            //             >
            //               <svg
            //                 xmlns="http://www.w3.org/2000/svg"
            //                 fill="currentColor"
            //                 viewBox="0 0 24 24"
            //                 className="w-5 h-5"
            //               >
            //                 <path d="M3.3 1.6C2.6 2 2 2.8 2 3.6v16.7c0 .9.6 1.6 1.3 2l10.7-10.7L3.3 1.6zM14.1 12.1l2.2-2.2-2.7-2.7-2.2 2.2 2.7 2.7zM15.7 13.7l-2.7 2.7 2.2 2.2c.8.8 2.1.8 2.9 0l2.1-2.1-4.5-4.5z" />
            //               </svg>
            //               Google Play
            //             </a>

            //             <a
            //               href="/downloads/pauk-tv-latest.apk"
            //               className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-full text-gray-300 text-sm transition duration-500 hover:border-blue-500 hover:bg-blue-500"
            //               download
            //             >
            //               <svg
            //                 xmlns="http://www.w3.org/2000/svg"
            //                 fill="currentColor"
            //                 viewBox="0 0 20 20"
            //                 className="w-5 h-5"
            //               >
            //                 <path d="M13 10V3H7v7H4l6 6 6-6h-3zm-9 7h14v2H4v-2z" />
            //               </svg>
            //               Download APK
            //             </a>
            //           </div>
            //         </div>

            //         <div className="">
            //           <img
            //             src={phones}
            //             alt="Phones Mockup"
            //             className="w-[400px] h-[400px] md:w-[800px] md:h-[550px] z-10"
            //           />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </SwiperSlide>
            <SwiperSlide key={i} className="text-blue-300 w-full">
              <div className="relative w-full h-[100vh]  md:h-[100vh] lg:h-[100vh]">
              
                <img
                  src={dt?.image || "/placeholder.svg"}
                  alt="Background not found"
                  className="h-full w-full object-center object-cover"
                />

                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-slate-900/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01152B] via-[#01152bb1] to-transparent" />

               
                <div className="absolute inset-0  flex items-center justify-center px-4 sm:px-6 lg:px-8">
                  <div className="w-full md:w-[85%] lg:w-[85%]   flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
                   
                    <div className="w-full md:w-2/4 space-y-4 md:space-y-6 text-center md:text-left">
                     
                     
                      
                      <div className="font-bold text-white text-2xl md:text-2xl lg:text-4xl leading-tight tracking-wide">
                        Never Miss a Match —{" "}Download  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                           Boss TV  App
                        </span>  Today!
                      </div>

              
                      <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-[16px] font-medium text-gray-300 leading-relaxed max-w-2xl">
                        Live-stream top football leagues, catch highlights, and
                        stay updated on your favorite teams — all from your
                        pocket. Premier League, La Liga, World Cup and more —
                        anytime, anywhere.
                      </p>

                    
                      

                    
                      <div className="flex flex-col sm:flex-row mt-4 md:mt-12 gap-3 md:gap-4 justify-center md:justify-start">
                        <a
                          href={version?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                           className="group flex items-center justify-center gap-3 border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-xl text-white text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                        >
{/* bg-[#E9376E] */}
                          <img src={playStore} className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                          <div className="text-left">
                            <div className="text-xs opacity-90">Get it on</div>
                            <div className="font-semibold">Google Play</div>
                          </div>
                        </a>
                        <a
                          href={version?.direct_link}
                          className="group flex items-center justify-center gap-3 border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-xl text-white text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                          download
                        >
                          <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
                          <div className="text-left">
                            <div className="text-xs opacity-90">Direct</div>
                            <div className="font-semibold">Download APK</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="w-full md:w-2/4   flex  justify-center md:justify-end relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-lg md:blur-2xl scale-100 md:scale-110 rounded-full" />
                      <div className="relative z-10">
                        <img
                          src={phones || "/placeholder.svg"}
                          alt="Boss TV App on Phones Mockup"
                          className="w-[280px] h-[280px]  md:w-[550px] md:h-[400px] lg:w-[650px] lg:h-[550px] object-cover drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-[#01152B] to-transparent" />
              </div>
            </SwiperSlide>
          ))}
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
