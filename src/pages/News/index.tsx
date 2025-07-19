import { useQuery } from "@tanstack/react-query";
import  { useState } from "react";
import { Link } from "react-router-dom";
import matcheService from "../../services/matcheService";
// import MatchCard from "../../components/Cards/MatchCard";
import FootballNewsCard from "../../components/Cards/NewCard";
import Preloader from "../../components/Preloader";

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["news", currentPage],
    queryFn: () => matcheService.fetchNews({currentPage}),
  });

  if(isLoading ) {
    return <Preloader />
  }
  return (
    <div className=" pt-22 md:pt-30  mx-5 md:mx-10 lg:mx-20">
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
            {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
          </li>
        </ol>
      </nav>
      <div className=" mt-10">
        <div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
          <div>Latest News</div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          {data?.data?.length > 0 ? (
            data?.data?.map((item: any, i: number) => (
              <FootballNewsCard item={item} key={i} />
            ))
          ) : (
            <div>No News Found</div>
          )}
        </div>
        <div className="flex justify-center mt-10 gap-2 text-[14px] cursor-pointer">
          <button
            disabled={currentPage == 1}
            onClick={() => {
              setCurrentPage((prev) => {
                if (prev > 1) {
                  return prev - 1;
                }
                return prev;
              });
            }}
            className={`${
              currentPage == 1 && "opacity-60"
            } py-2 px-4 cursor-pointer rounded-md  hover:border-[#F65311] dark:bg-[#101828]  dark:border-slate-700 dark:text-white border border-gray-300 hover:bg-[#F65311] hover:text-white`}
          >
            previous
          </button>

          {Array.from({ length: data?.pagination?.lastPage }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`py-2 px-4 cursor-pointer rounded-md border border-gray-300 ${
                currentPage === index + 1
                  ? "bg-[#F65311] text-white"
                  : "bg-gray-100 hover:bg-[#F65311] hover:border-[#F65311] dark:bg-[#101828]  dark:border-slate-700 dark:text-white hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage == data?.pagination?.lastPage}
            onClick={() => {
              setCurrentPage((prev) => {
                if (prev < data?.pagination?.lastPage) {
                  return prev + 1;
                }
                return prev;
              });
            }}
            className={`${
              currentPage == data?.pagination?.lastPage && "opacity-60"
            } py-2 px-4 cursor-pointer rounded-md  hover:border-[#F65311] dark:bg-[#101828]  dark:border-slate-700 dark:text-white border border-gray-300 hover:bg-[#F65311] hover:text-white`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
