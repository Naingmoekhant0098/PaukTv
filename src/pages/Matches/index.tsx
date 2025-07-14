import { useQuery } from '@tanstack/react-query'
import React from 'react'
import matcheService from '../../services/matcheService'
import { Link } from 'react-router-dom';
import MatchCard from '../../components/Cards/MatchCard';

function Matches() {
  const {data,isLoading} = useQuery({ queryKey: ['matches'], queryFn: matcheService.fetchMatches });
  
  return (
    <div className=" pt-22 md:pt-30  mx-5 md:mx-10 lg:mx-20">
    <nav className="text-white font-bold text-sm md:text-md " aria-label="Breadcrumb">
<ol className="list-none p-0 inline-flex">
  <li className="flex items-center">
    <Link  className=" font-medium" to={'/'}>Home</Link>
    <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
  </li>
  <li className="flex items-center">
  <Link  className=" font-medium" to={'/matches'}>Matches</Link>
    {/* <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> */}
  </li>
   
</ol>
</nav>

<div className=' mt-10'>
<div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
        <div>Live Matches</div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-5 gap-4 mt-5'>
        {
          data?.liveMatches.length>0 ? data?.liveMatches?.map((item:any,i:number)=>(
             <MatchCard  item={item} key={i}/>
          )) : <div>No Matches Found</div>
        }
      </div>
</div>
<div className=' mt-6 md:mt-8'>
<div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
        <div>Today Matches</div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-5 gap-3 mt-3 md:mt-5'>
        {
          data?.today.length>0 ? data?.today?.map((item:any,i:number)=>(
             <MatchCard  item={item} key={i}/>
          )): <div>No Matches Found</div>
        }
      </div>
</div>

<div className=' mt-8'>
<div className=" text-xl md:text-2xl font-semibold  tracking-wider uppercase">
        <div>Tomorrow Matches</div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-5 gap-3 mt-5'>
        {
          data?.tomorrow?.length >0 ? data?.tomorrow?.map((item:any,i:number)=>(
             <MatchCard  item={item} key={i}/>
          )): <div>No Matches Found</div>
        }
      </div>
</div>

</div>
  )
}

export default Matches