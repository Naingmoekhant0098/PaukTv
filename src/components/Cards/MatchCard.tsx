import moment from 'moment'
// import { useNavigate } from 'react-router-dom';
interface Item  {
  match_time: number;  
match_status: string;
home_team_name: string;
home_team_logo: string;
away_team_name: string;
away_team_logo: string;
league_name: string;
servers: any[];  
}

interface itemProps{
item: Item,
setIsAdsShow : (value : boolean)=>void,
handleCurrentVideo : (item:any , type:string)=>void
}



function MatchCard({item,setIsAdsShow,handleCurrentVideo} : itemProps) {
 

  function isUnixTimestamp(value: any): boolean {
    return value > 0 && value.toString().length === 10;
  }
  function normalizeToISO(dateInput: any): string {
    if (isUnixTimestamp(dateInput)) {
      return moment.unix(dateInput).format('LLL');
    }
    return moment(dateInput).format('LLL');
  }
  return (
    <div className="rounded-[10px] border border-white/5 bg-white/5 backdrop-blur-[0.6px]] min-h-[250px] md:min-h-[260px]  p-4 md:p-6">
      <div className=" flex items-center justify-between">
        <div className=" font-medium">{item && item?.league_name}</div>
          {
          item && item.match_status==='live' &&  <div className=" flex items-center gap-2">
          <div className="  relative ">
            <div className=" h-2 w-2 inset-0  m-auto absolute rounded-full bg-red-400"></div>
            <div className=" h-3 w-3 animate-ping rounded-full bg-red-400"></div>
          </div>
          <div className=" text-[12px] text-red-400  ">Live Now</div>
        </div>
          }
          
      </div>

      <div className=" grid grid-cols-5 mt-6">

        <div className=" flex col-span-2  items-center flex-col justify-center text-center ">
            <img src={ item && item?.home_team_logo}  alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16 object-contain" />
            <div className=" text-[14px] mt-3 line-clamp-2  h-10  font-semibold">
          {item && item?.home_team_name}
            </div>
        </div>

        <div className=" flex items-center justify-center gap-1 -mt-10">
           <div className="  text-[16px] font-semibold">
         {/* {item && moment(date.toLocaleString()).format('LT')} */}
         VS
           </div>
           
        </div>

        <div className=" col-span-2  flex items-center flex-col justify-center text-center ">
        <img src={ item?.away_team_logo}  alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16 object-contain " />
            <div className=" text-[14px] mt-3 line-clamp-2  h-10  font-semibold">
            {item && item?.away_team_name}
            </div>
        </div>
      </div>

      {
          item && item.match_status==='live' ? <div onClick={()=>{setIsAdsShow(true),handleCurrentVideo(item,'match')}} className=" border p-3 px-8   rounded-full  text-center mt-3 md:mt-6 border-gray-400 font-medium text-gray-300 text-[14px] md:text-[14px]  transition-all duration-500 cursor-pointer hover:border-[#E9376E] hover:bg-[#E9376E] ">
          Watch Now
        </div>
        :
      
        <div className=" text-center mt-2 md:mt-6 text-[14px] opacity-80">Kickoff : {normalizeToISO(item.match_time)}</div>
          }

      
    </div>
  );
}

export default MatchCard;
