// import React from "react";
// import { MdNavigateNext } from "react-icons/md";
import CategoryCard from "../Cards/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";


interface sliderProps {
  title: string;
  link: string;
  data: any;
}

function Slider({ title, data = [] }: sliderProps) {

  return (
    <div className=" mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10 ">
      <div className=" flex items-center justify-between">
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
          {title}
        </div>
         
      </div>

      <div className="mt-4">
        {
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
           
              320: { slidesPerView: 1.8 }, // Small phones
              344: { slidesPerView: 1.55 },
              360: { slidesPerView: 1.65 },
              375: { slidesPerView: 1.7 },  
              390: { slidesPerView: 1.8 },
              412: { slidesPerView: 1.9 },  
              414: { slidesPerView: 1.9 },  
              480: { slidesPerView: 1.6 }, // Larger phones
              540: { slidesPerView: 2.4 }, 
              640: { slidesPerView: 2 }, // Small tablets
              768: { slidesPerView: 2.6 }, // Tablets
              820: { slidesPerView: 2.8 },
              1024: { slidesPerView: 3.4 }, // Small desktops/laptops
              1280: { slidesPerView: 6.1 }, // Medium desktops
              1440: { slidesPerView: 6.1 }, // Large desktops
              1920: { slidesPerView: 7.1 }, // Full HD and wider
              2560: { slidesPerView: 8.2 }, // 2K+ displays
            }}
            className="py-6"
          >
            {data?.length>0 && data?.map((item: any) => (
              <SwiperSlide key={item._id}>
                <CategoryCard  item={item.category}/>
              </SwiperSlide>
            ))}
             
          </Swiper>
        }
      </div>
    </div>
  );
}

export default Slider;
