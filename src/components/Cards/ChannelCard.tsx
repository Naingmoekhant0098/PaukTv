

import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface MediaItem {
  name: string
  image: string
  _id?: string,
  stream_url : string
}

interface MediaCardProps {
  item: MediaItem
}

export function MediaCard({ item }: MediaCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
const navigate = useNavigate();
  return (
    <div
     
      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm w-full cursor-pointer h-[300px] md:min-h-[170px] md:w-[300px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
    >
      <div className="relative overflow-hidden rounded-t-xl">
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      
        {!imageLoaded && <div className="w-full h-[120px] md:h-[180px] bg-gray-800/50 animate-pulse rounded-t-xl" />}

        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className={`w-full h-[180px] object-cover rounded-t-xl transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-4 pt-3">
        <div className="text-center my-3 mt-2 md:mt-1">
          <h3 className="text-white font-medium text-md md:text-base line-clamp-2 leading-tight">{item?.name}</h3>
        </div>

        <button
        onClick={()=>navigate('/live-match', { state: {name : item?.name , id : item?._id , stream_url : item?.stream_url , isChannel : true  } })}
         className=" border py-3 px-8  w-full  rounded-full  text-center   border-gray-400 text-gray-300 text-[13px] md:text-[14px]  transition-all duration-500 cursor-pointer hover:border-[#E9376E] hover:bg-[#E9376E] "
        >
          Watch Now
        </button>
      </div>
    </div>
  )
}

 
