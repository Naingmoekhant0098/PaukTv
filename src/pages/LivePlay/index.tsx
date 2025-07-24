// import React from "react";
import { Link, useLocation } from "react-router-dom";
// import moment from "moment";
import Slider from "../../components/Slider";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
import LiveCard from "../../components/Cards/LiveCard";
import Banner from "../../components/Ads/Banner";
import BannerMedium from "../../components/Ads/BannerMedium";

function LivePlay({setIsAdsShow  ,handleCurrentVideo} : {  setIsAdsShow : (value : boolean)=>void,
  handleCurrentVideo : (item:any , type:string)=>void}) {
  const location = useLocation();
  const item = location.state;
  // console.log(item);
  const { data } = useQuery({
    queryKey: ["matches"],
    queryFn: matcheService.fetchMatches,
  });

  return (
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
                {item?.isChannel ? "Channels" : "Matches"}
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
              <div className=" font-medium flex gap-2 line-clamp-2">
                <div> {item && item?.name}</div>
              </div>
              {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
            </li>
          </ol>
        </nav>
        <div className=" grid grid-cols-1 mt-10 md:mt-6 md:grid-cols-3 gap-5">
          <div className=" col-span-2">
            {/* <video src={item?.stream_url}  className=" w-full h-auto md:h-[500px] -mt-2" controls autoPlay={true} spellCheck /> */}
            <iframe
              width="100%"
              height=""
              src={item.stream_url}
              title="YouTube video player"
              className=" w-full h-[250px] md:h-[500px] -mt-2"
              // frameborder={0}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
            {/* <iframe width='640' height='400' src='https://hoofootay4.spotlightmoment.com/embed/efit2uZDhn0CN' ></iframe> */}
            <Banner />
          </div>
          <div className=" hidden md:block col-span-1">
             <BannerMedium />
            <div className=" mt-4 flex flex-col gap-4 ">
              {data &&
                data.today.slice(0, 2).map((item: any, i: number) => {
                  return <LiveCard setIsAdsShow={setIsAdsShow} handleCurrentVideo={handleCurrentVideo} item={item} key={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Slider
      setIsAdsShow={setIsAdsShow}
      handleCurrentVideo={handleCurrentVideo}
        title="You May Also Like"
        link="/all"
        data={data?.liveMatches}
        isSwitch={false}
      />
    </div>
  );
}

export default LivePlay;
