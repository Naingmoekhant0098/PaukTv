import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Slider from "../../components/Slider";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
import LiveCard from "../../components/Cards/LiveCard";
import Preloader from "../../components/Preloader";
import Ads from "../../components/Ads";
import Banner from "../../components/Ads/BannerMedium";
import BannerMedium from "../../components/Ads/Banner";
function Detail() {
  const location = useLocation();
  const item = location.state;
  
  const { data, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: matcheService.fetchMatches,
  });
  
  const navigate = useNavigate();



  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
    <Ads />
      <div>
        <div className=" pt-22 md:pt-30  mx-5 md:mx-10 lg:mx-20">
          <nav
            className="text-white font-bold text-sm md:text-md "
            aria-label="Breadcrumb"
          >
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link className=" font-medium" to={"/"}>
                  Home
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link className=" font-medium" to={"/matches"}>
                  Matches
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <div className=" font-medium flex gap-2">
                  <div> {item && item?.league_name}</div> VS{" "}
                  <div>{item && item?.home_team_name}</div>
                </div>
                {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
              </li>
            </ol>
          </nav>
          <div className=" grid grid-cols-1 mt-6 md:grid-cols-3 gap-5">
            <div className=" col-span-2">
              <div className="rounded-[10px] border border-white/5 bg-white/5 backdrop-blur-[0.6px]  justify-center p-10 py-5 md:p-12 md:pt-8">
                <div className=" flex items-center  justify-center ">
                  <div className=" font-medium text-[16px] bg md:text-[20px] text-center">
                    {item && item?.league_name}
                  </div>
                </div>

                <div className=" grid grid-cols-5 mt-3 gap-6 md:gap-0">
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
                  <div className="  md:-mt-6">
                    {item && item.match_status === "finished" ? (
                      <div className="text-center mt-6 text-[14px] opacity-80">
                        Full Time
                      </div>
                    ) : (
                      item &&
                      item.match_status === "live" && (
                        <div className=" flex items-center gap-1 md:gap-2">
                          <div className="  relative ">
                            <div className="h-2 md:h-3 w-2 md:w-3 inset-0  m-auto absolute rounded-full bg-red-400"></div>
                            <div className=" h-3 md:h-4 w-3 md:w-4 animate-ping rounded-full bg-red-400"></div>
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

              <div className=" mt-6 md:mt-8">
                <div className=" font-medium text-[20px]">
                  Choose Live Server
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
                  {item?.servers.map((server: any, i: number) => {
                    return (
                      <div
                        key={i}
                        onClick={() =>
                          navigate("/live-match", { state: server })
                        }
                        className="rounded-[10px] border border-white/5 bg-white/5 cursor-pointer hover:bg-white/8 backdrop-blur-[0.6px]  justify-center p-4 md:p-6 text-center"
                      >
                        {server?.name}
                      </div>
                    );
                  })}
                </div>
              </div>

               <Banner />
            </div>
            <div className=" col-span-1 hidden md:block">
              <BannerMedium />
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
    </>
  );
}

export default Detail;
