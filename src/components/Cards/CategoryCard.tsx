// import React from 'react'

import { GiTv } from "react-icons/gi";
import {  useNavigate } from 'react-router-dom';
function CategoryCard({item}:any) {
  const navigate = useNavigate();
  

  return (
    <div onClick={()=>navigate('/channel-posts', { state: item?._id })} className="rounded-[10px] border border-white/5 bg-white/5 hover:bg-white/8 flex justify-center  items-center backdrop-blur-[0.6px] w-[200px] cursor-pointer min-h-[130px]  md:min-h-[170px] md:w-[200px]">
        <div className=' text-white flex flex-col gap-2 justify-center  h-full items-center font-semibold'>
        <GiTv size={30} className=' opacity-70'/>
           <div className=' font-semibold text-md text-center text-wrap  '>
           {item?.name}
           </div>
        </div>
    </div>
  )
}

export default CategoryCard