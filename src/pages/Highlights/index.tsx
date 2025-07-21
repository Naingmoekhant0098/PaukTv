import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import matcheService from '../../services/matcheService';
// import MatchCard from '../../components/Cards/MatchCard';
import Preloader from '../../components/Preloader';
import HighlightCard from '../../components/Cards/HighlightCard';

function Highlights({setIsAdsShow  ,handleCurrentVideo} : {  setIsAdsShow : (value : boolean)=>void,
  handleCurrentVideo : (item:any , type:string)=>void}) {
  const [current,setCurrent]=useState<number>(10);
  const {data,isLoading} = useQuery({ queryKey: ['hightlights',current], queryFn:()=> matcheService.fetchHighlightsFromYt("football highlights",current) });
   
  if(isLoading ) {
    return <Preloader />
  }
  return (
    <div className=" pt-22 md:pt-30  mx-5 md:mx-10 lg:mx-20">
    <nav className="text-white font-bold text-sm md:text-md " aria-label="Breadcrumb">
<ol className="list-none p-0 inline-flex">
  <li className="flex items-center">
    <Link  className=" font-medium" to={'/'}>Home</Link>
    <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
  </li>
  <li className="flex items-center">
  <Link  className=" font-medium" to={'/highlights'}>Highlights</Link>
    {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
  </li>
   
</ol>
</nav>
<div className=' mt-10'>
<div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
        <div>Latest Highlights</div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
        {
          data?.length>0 ? data?.map((item:any,i:number)=>(
             <HighlightCard  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo}  item={item} key={i}/>
          )) : <div>No Matches Found</div>
        }
      </div>

    <div className=' flex items-center justify-center mt-4 '>
    <div onClick={()=>setCurrent((prev)=>prev+10)} className=" flex items-center gap-1 md:gap-2 border p-2 px-2 md:px-4 cursor-pointer transition duration-300  hover:border-[#F65311] hover:bg-[#F65311] border-gray-300 rounded-full">
               <div className="  text-[12px] md:text-[13px]">Load More</div>
              
               
             </div>
    </div>
</div>

</div>
  )
}

export default Highlights