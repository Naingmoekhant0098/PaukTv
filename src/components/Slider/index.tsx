import React from "react";
import { MdNavigateNext } from "react-icons/md";
import LiveCard from "../Cards/LiveCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface sliderProps {
  title: string;
  link: string;
  data: any;
}

function Slider({ title, link, data = [] }: sliderProps) {
  const dummy_data = [
    { id: 1, title: "Item 1", desc: "Description 1" },
    { id: 2, title: "Item 2", desc: "Description 2" },
    { id: 3, title: "Item 3", desc: "Description 3" },
    { id: 4, title: "Item 4", desc: "Description 4" },
    { id: 5, title: "Item 5", desc: "Description 5" },
  ];

  return (
    <div className=" mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10">
      <div className=" flex items-center justify-between">
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
          {title}
        </div>
        <div className=" flex items-center gap-1 md:gap-2 border p-2 px-2 md:px-4 cursor-pointer border-gray-300 rounded-full">
          <div className="  text-[12px] md:text-[13px]">View More</div>
          <div>
            <MdNavigateNext />
          </div>
        </div>
      </div>

      <div className=" mt-4 md:mt-6">
        {
          //    <Swiper
          //    slidesPerView={1.4}
          //    spaceBetween={10}
          //    pagination={{ clickable: true }}
          //    breakpoints={{
          //      640: { slidesPerView: 1.5 },
          //      768: { slidesPerView: 2.2 },
          //      1024: { slidesPerView: 4.2},
          //    }}
          //    className="py-6"
          //  >
          //    {dummy_data.map((item :any) => (
          //      <SwiperSlide key={item.id}>
          //         <LiveCard />
          //      </SwiperSlide>
          //    ))}
          //  </Swiper>
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
              1280: { slidesPerView: 4.5 }, 
              1440: { slidesPerView: 4.2 },  
              1920: { slidesPerView: 6 },  
              2560: { slidesPerView: 7 },  
            }}
            className="py-6"
          >
            {dummy_data.map((item: any) => (
              <SwiperSlide key={item.id}>
                <LiveCard />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
}

export default Slider;
