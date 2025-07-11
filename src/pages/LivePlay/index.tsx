import React from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Slider from "../../components/Slider";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
import LiveCard from "../../components/Cards/LiveCard";
import ReactPlayer from 'react-player';

function LivePlay() {
  const location = useLocation();
  const item = location.state;
  console.log(item.stream_url);
  const { data, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: matcheService.fetchMatches,
  });

  return (
    <div>
      <div className=" pt-30  mx-4 md:mx-10 lg:mx-20">
        <div className=" grid grid-cols-3 gap-5">
          <div className=" col-span-2">
            {/* <ReactPlayer
              url={item?.stream_url||''}
              playing={true}
              controls={true}
              loop={false}
              muted={false}
              width = '100%'
  height = '300px'
            /> */}
            <video src={item.stream_url}  className=" w-full h-[500px] -mt-2" controls autoPlay={true} spellCheck />

            <div className=" mt-12">
              <div className="">
                <img
                  className=" w-full rounded-xl h-[350px] object-cover"
                  src="https://www.investopedia.com/thmb/Br2T0CSGtsyj1ME9Su-MwSOsHR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1463460814-286d8f0f5acc46af8e1f40010327bc5b.jpg"
                  alt=""
                />
                <div className=" mt-3 opacity-85">
                  While the Azzurri saw off Venezuela in Miami, their South
                  American counterparts continued building up to the Copa
                  America by beating Guatemala.
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="">
              <div className="">
                <img
                  className=" w-full rounded-xl h-[250px] object-cover"
                  src="https://www.investopedia.com/thmb/Br2T0CSGtsyj1ME9Su-MwSOsHR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1463460814-286d8f0f5acc46af8e1f40010327bc5b.jpg"
                  alt=""
                />
                <div className=" mt-3 opacity-75">
                  While the Azzurri saw off Venezuela in Miami, their South
                  American counterparts continued building up to the Copa
                  America by beating Guatemala.
                </div>
              </div>
            </div>
            <div className=" mt-4 flex flex-col gap-4 ">
              {data &&
                data.today.slice(0, 3).map((item: any, i: number) => {
                  return <LiveCard item={item} key={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Slider
        title="You May Also Like"
        link="/all"
        data={data?.liveMatches}
        isSwitch={false}
      />
    </div>
  );
}

export default LivePlay;
