import moment from "moment";
import { FaCalendarAlt, FaClock } from "react-icons/fa"
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function FootballNewsCard({item} : any) {
    const wordCount = item?.content.trim().split(/\s+/).filter(Boolean).length;
    
    const readMin= Math.ceil(wordCount / 200);
    const navigate = useNavigate();
  return (
    
    
      <div onClick={()=>navigate(`/news-detail/${item?._id}`)}  className="bg-white/5 cursor-pointer rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group shadow-lg border border-white/5">
       
        <div className="relative overflow-hidden">
          <img
            src={item?.image}
            alt="Football match action"
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        
          <div className="absolute top-4  uppercase left-4 bg-[#ba3804af] text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wide">
           {item?.category}
          </div>

          
          <div className="absolute top-4  right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <FaClock className="w-3 h-3 text-white" />
            <span className="text-xs text-white font-medium">{readMin} min read</span>
          </div>
        </div>

        <div className="p-4">
         
          <h2 className="text-xl mt-0  font-bold text-white mb-3 line-clamp-2 group-hover:text-[#F65311] transition-colors duration-200 leading-tight">
           {item?.title}
          </h2>

        
          <div  dangerouslySetInnerHTML={{__html: item?.content}} className=" text-sm mb-4 line-clamp-3 leading-relaxed [&_*]:!bg-inherit [&_*]:!text-gray-400 " >
           
          </div>

          
          <div className="flex items-center justify-between pt-4 border-t border-gray-500">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{moment(item?.createdAt).format('LL')}</span>
            </div>

            <div onClick={()=>navigate(`/news-detail/${item?._id}`)}  className=" border p-1.5 px-4  flex flex-row items-center rounded-full  text-center  border-gray-400 text-gray-300 text-[12px] transition-all duration-500 cursor-pointer hover:border-[#F65311] hover:bg-[#F65311] ">
         Read More <div>
          <MdNavigateNext size={18}/>
         </div>
        </div>
          </div>

         
        </div>
      </div>
   
  )
}
