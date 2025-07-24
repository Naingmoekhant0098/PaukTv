// import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";

function HighlightCard({ item, setIsAdsShow, handleCurrentVideo }: any) {
  return (
    <div className="bg-white/5   h-auto md:h-[330px] cursor-pointer overflow-hidden rounded-xl  hover:shadow-2xl transition-all duration-300 group shadow-lg border border-white/5">
      <div className="relative overflow-hidden">
        <img
          src={`${item?.snippet?.thumbnails?.high?.url}`}
          alt="Football match action"
          className=" h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCirclePlay
            onClick={() => {
              setIsAdsShow(true),
                handleCurrentVideo(
                  {
                    name: item?.snippet?.title,
                    stream_url: `https://www.youtube.com/embed/${item?.id?.videoId}`,
                  },
                  "highlight"
                );
            }}
            // onClick={()=> navigate("/live-match", { state:  })}
            className="text-red text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className=" font-semibold text-[13px] md:text-md p-2 px-3 line-clamp-2">
        {item?.snippet?.title}
      </div>
    </div>
  );
}

export default HighlightCard;
