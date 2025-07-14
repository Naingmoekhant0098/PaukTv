import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import matcheService from "../../services/matcheService";
import MatchCard from "../../components/Cards/MatchCard";
import FootballNewsCard from "../../components/Cards/NewCard";
import Preloader from "../../components/Preloader";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import NewsSlider from "../../components/Slider/NewsSlider";

function NewsDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["news-detail", id],
    queryFn: () => matcheService.fetchNewsById(id),
  });
   
   const {data:newsData,isLoading:newLoading} = useQuery({ queryKey: ['home-news'], queryFn: matcheService.fetchNews});
   

  if (isLoading) {
    return <Preloader />;
  }
  return (
  <>
    <div className=" pt-22 md:pt-30  mx-5 md:mx-20 lg:mx-20">
      <nav
        className="text-white font-bold text-md md:text-md "
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
            <Link className=" font-medium" to={"/highlights"}>
              News
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
            <Link className=" font-medium" to={"/highlights"}>
              {data?.data?.title}
            </Link>
            {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
          </li>
        </ol>
      </nav>
    <div className=" grid grid-cols-3 mt-10 gap-5">
    <div className="  space-y-4 col-span-2">
        <div className=" uppercase inline-block left-4 bg-[#ba3804af] text-white px-3 py-1 rounded-md text-sm  font-semibold tracking-wide">
          {data?.data?.category}
        </div>
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
          <div> {data?.data?.title}</div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaCalendarAlt className="w-3 h-3" />
          <span>{moment(data?.data?.createdAt).format("LL")}</span>
        </div>
        <div>
          <img
            src={data?.data?.image}
            alt="Football match action"
            className="w-full h-[40vh] md:h-[60vh] my-6 object-top   rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data?.data?.content }}
          className=" text-[16px] w-full text-wrap  mb-4  [&_*]:!bg-inherit [&_*]:!text-white "
        ></div>

<div className=" mt-10">
              <div className="">
                <img
                 className=" w-full rounded-xl h-auto md:h-[350px] object-cover"
                  src="https://www.investopedia.com/thmb/Br2T0CSGtsyj1ME9Su-MwSOsHR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1463460814-286d8f0f5acc46af8e1f40010327bc5b.jpg"
                  alt=""
                />
                <div className=" text-[14px] mt-3 opacity-85">
                  While the Azzurri saw off Venezuela in Miami, their South
                  American counterparts continued building up to the Copa
                  America by beating Guatemala.
                </div>
              </div>
            </div>




      </div>

      <div className=" hidden md:block col-span-1">
            <div className="">
              <div className="">
                <img
                  className=" w-full rounded-xl h-auto md:h-[200px] object-cover"
                  src="https://www.investopedia.com/thmb/Br2T0CSGtsyj1ME9Su-MwSOsHR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1463460814-286d8f0f5acc46af8e1f40010327bc5b.jpg"
                  alt=""
                />
                <div className=" mt-3 text-[14px] opacity-75">
                  While the Azzurri saw off Venezuela in Miami, their South
                  American counterparts continued building up to the Copa
                  America by beating Guatemala.
                </div>
              </div>
            </div>
            <div className=" mt-4 flex flex-col gap-4 ">
              {newsData?.data &&
                newsData?.data.slice(0, 3).map((item: any, i: number) => {
                  return <FootballNewsCard item={item} key={i} />;
                })}
            </div>
          </div>
      
    </div>
     
    </div>
 
  <NewsSlider  title='Latest News' link='/news' data={newsData?.data && newsData?.data} />
   
  
  </>
  );
}

export default NewsDetail;
