import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import matcheService from '../../services/matcheService';

function Banner() {
    const { data, isLoading } = useQuery({
        queryKey: ["ads"],
        queryFn: () => matcheService.fetchAdsBanner({}),
      });
    const [currentAds,setCurrentAds] = useState<any>(null);
    
      useEffect(()=>{
        if(data?.ads?.length >0){
            const index = Math.floor(Math.random() * data?.ads?.length);
           setCurrentAds( data?.ads[index])
        }
    
      },[data])
    
  return (
        <div className="  border p-2 border-gray-600 rounded-2xl">
                <a href={currentAds?.linkUrl} className="">
                  <img
                    className=" w-full rounded-xl h-[350px] object-cover"
                    src={data?.ads?.length > 0 && currentAds?.imageUrl}
                    alt=""
                  />
                  <div className=" p-3">
                  {data?.ads?.length > 0 && currentAds?.title}
                  </div>
                </a>
              </div>
    
  )
}

export default Banner