import moment from 'moment'
import { useNavigate, useNavigation } from 'react-router-dom';
interface itemProps {
  item : {
    match_time: number;  
  match_status: string;
  home_team_name: string;
  home_team_logo: string;
  away_team_name: string;
  away_team_logo: string;
  league_name: string;
  servers: any[];  
  }

}


function LiveCard({item} : itemProps) {
  const navigate = useNavigate();
  const date = new Date(item?.match_time * 1000);
  return (
    <div className="rounded-[10px] border border-white/5 bg-white/5 backdrop-blur-[0.6px] w-[250px] h-[290px] md:w-[294px] p-4 md:p-6">
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
            <img src={ item && item?.home_team_logo}  alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16" />
            <div  className=" text-[13px] md:text-[14px] mt-3 line-clamp-2  h-10 ">
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
        <img src={ item?.away_team_logo}  alt=" logo not found" className=" w-14 md:w-16 h-14 md:h-16 " />
            <div className=" text-[13px] md:text-[14px] mt-3 line-clamp-2  h-10 ">
            {item && item?.away_team_name}
            </div>
        </div>
      </div>

      {
          item && item.match_status==='live' ? <div onClick={()=>navigate('/match-details', { state: item })} className=" border p-3 px-8   rounded-full  text-center mt-6 border-gray-400 text-gray-300 text-[13px] md:text-[14px]  transition-all duration-500 cursor-pointer hover:border-[#F65311] hover:bg-[#F65311] ">
          Watch Now
        </div>
        :
        <div className=" text-center mt-6 text-[14px] opacity-80">Kickoff : {moment(date.toLocaleString()).format('LLL')}</div>
          }

      
    </div>
  );
}

export default LiveCard;
