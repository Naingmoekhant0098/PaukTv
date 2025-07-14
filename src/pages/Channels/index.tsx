import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import matcheService from "../../services/matcheService";
 
import { MediaCard } from "../../components/Cards/ChannelCard";
import Preloader from "../../components/Preloader";
function Channels() {
  const location = useLocation();
  const id = location.state;
  const { data: categoryData, isLoading: categoryLoading } = useQuery({
    queryKey: ["channels", id],
    queryFn: () => matcheService.fetchChannelbyUd(id),
  });

  if(categoryLoading ) {
    return <Preloader />
  }
  return (
    <div className=" pt-22 md:pt-30 min-h-screen  mx-5 md:mx-10 lg:mx-20">
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
            <Link className=" font-medium" to={"/"}>
              {categoryData && categoryData[0]?.channel_category?.name}
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
            <div className=" font-medium flex gap-2"> Posts</div>
            {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
          </li>
        </ol>
      </nav>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        {categoryData?.length > 0 &&
          categoryData?.map((item: any, index: number) => {
            return (
               <MediaCard item={item} />
            );
          })}
        
         
      </div>
    </div>
  );
}

export default Channels;
