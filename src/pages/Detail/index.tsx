import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Slider from "../../components/Slider";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
import LiveCard from "../../components/Cards/LiveCard";
function Detail() {
  const location = useLocation();
  const item = location.state;
  const date = new Date(item?.match_time * 1000);
  const { data, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: matcheService.fetchMatches,
  });
  const navigate = useNavigate();

  return (
    <div>
      <div className=" pt-30  mx-4 md:mx-10 lg:mx-20">
        <div className=" grid grid-cols-3 gap-5">
          <div className=" col-span-2">
            <div className="rounded-[10px] border border-white/5 bg-white/5 backdrop-blur-[0.6px]  justify-center  md:p-12 md:pt-8">
              <div className=" flex items-center  justify-center ">
                <div className=" font-medium text-[20px] text-center">
                  {item && item?.league_name}
                </div>
              </div>

              <div className=" grid grid-cols-5 mt-3">
                <div className=" flex col-span-2  items-center flex-col justify-center text-center ">
                  <img
                    src={item && item?.home_team_logo}
                    alt=" logo not found"
                    className=" w-14 md:w-20 h-14 md:h-20"
                  />
                  <div className=" text-[13px] md:text-[16px] mt-4 line-clamp-2 font-semibold  tracking-wider">
                    {item && item?.home_team_name}
                  </div>
                </div>

                <div className=" flex items-center justify-center gap-1 -mt-10">
                  <div className="  text-[20px] font-semibold">
                    {/* {item && moment(date.toLocaleString()).format('LT')} */}
                    {/* {item && item.match_status} */}
                    VS
                  </div>
                </div>

                <div className=" col-span-2  flex items-center flex-col justify-center text-center ">
                  <img
                    src={item?.away_team_logo}
                    alt=" logo not found"
                    className=" w-14 md:w-20 h-14 md:h-20 "
                  />
                  <div className=" text-[13px] md:text-[16px] mt-4 line-clamp-2  font-semibold  tracking-wider ">
                    {item && item?.away_team_name}
                  </div>
                </div>
              </div>
              <div className=" flex  items-center justify-center ">
                <div className=" -mt-6">
                  {item && item.match_status === "finished" ? (
                    <div className="text-center mt-6 text-[14px] opacity-80">
                      Full Time
                    </div>
                  ) : (
                    item &&
                    item.match_status === "live" && (
                      <div className=" flex items-center gap-2">
                        <div className="  relative ">
                          <div className=" h-3 w-3 inset-0  m-auto absolute rounded-full bg-red-400"></div>
                          <div className=" h-4 w-4 animate-ping rounded-full bg-red-400"></div>
                        </div>
                        <div className=" text-[15px] text-red-400   ">
                          Live Now
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="  mt-8">
              <div className=" font-medium text-[20px]">Choose Live Server</div>
              <div className=" grid grid-cols-3 mt-5 gap-4">
                {item?.servers.map((server: any, i: number) => {
                  return (
                    <div
                      key={i}
                      onClick={()=>navigate('/live-match', { state: server })}
                      className="rounded-[10px] border border-white/5 bg-white/5 cursor-pointer hover:bg-white/8 backdrop-blur-[0.6px]  justify-center  md:p-6 text-center"
                    >
                      {server?.name}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" mt-8">
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
                {
                    data && data.today.slice(0,3).map((item : any,i : number)=>{
                        return <LiveCard item={item} key={i} />
                    })
                }
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

export default Detail;
