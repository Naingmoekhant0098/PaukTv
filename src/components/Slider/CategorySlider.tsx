import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import CategoryCard from '../Cards/CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 
 
interface sliderProps {
    title : string,
    link : string,
    data : any
}

function Slider({title,link , data = []} : sliderProps) {
    const dummy_data = [
        { id: 1, title: "Item 1", desc: "Description 1" },
        { id: 2, title: "Item 2", desc: "Description 2" },
        { id: 3, title: "Item 3", desc: "Description 3" },
        { id: 4, title: "Item 4", desc: "Description 4" },
        { id: 5, title: "Item 5", desc: "Description 5" },
      ];
      
  return (
    <div className=' mx-20 mt-10'>
        <div className=' flex items-center justify-between'>
            <div  className=' text-2xl font-semibold  tracking-wider uppercase'>
                {title}
            </div>
            <div className=' flex items-center gap-2 border p-2 px-4 cursor-pointer border-gray-300 rounded-full' >
             <div className='  text-[13px]'>
             View More
             </div>
             <div>
             <MdNavigateNext />
             </div>
            </div>
        </div>

        <div className=' mt-6'>
            {
               <Swiper
               slidesPerView={1.2}
               spaceBetween={10}
               pagination={{ clickable: true }}
               breakpoints={{
                 640: { slidesPerView: 1.5 },
                 768: { slidesPerView: 2.5 },
                 1024: { slidesPerView: 4.9},
               }}
               className="py-6"
             >
               {dummy_data.map((item :any) => (
                 <SwiperSlide key={item.id}>
                  <CategoryCard/>
                 </SwiperSlide>
               ))}
             </Swiper>
            }
        </div>
    </div>
  )
}

export default Slider