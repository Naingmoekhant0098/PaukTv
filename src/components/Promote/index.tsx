// import React from 'react'
import { FaDownload} from 'react-icons/fa6'
import playStore from "../../assets/images/playstore.png";
import phones from "../../assets/images/phone.png";
import { useQuery } from '@tanstack/react-query';
import matcheService from '../../services/matcheService';
function Promote() {
  const { data:version } = useQuery({
    queryKey: ["versions"],
    queryFn: matcheService.fetchVersion,
  });
  
  return (
   <div className=' flex justify-around bg-slate-950 py-12 md:py-4 md:h-[70vh] my-10'>
     <div className=" mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10 ">
        
        <div className="w-full   flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full md:w-2/4   flex  justify-center relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-2xl scale-100 rounded-full" />

                     <div className="relative z-10">
                       <img
                         src={phones || "/placeholder.svg"}
                         alt="Boss TV App on Phones Mockup"
                         className="w-[280px] h-[280px] md:w-[550px] md:h-[400px] lg:w-[450px] lg:h-[450px]  object-cover drop-shadow-2xl"
                       />
                     </div>
                   </div>
                   <div className="w-full md:w-2/4 space-y-4 md:space-y-6 text-center md:text-left">
                    
                    
                     
                     <div className="font-bold text-white text-xl md:text-2xl lg:text-4xl leading-tight tracking-wide">
                       Never Miss a Match —{" "}Download  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                          Boss TV  App
                       </span>  Today!
                     </div>

             
                     <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-[16px] text-gray-300 leading-relaxed max-w-2xl">
                       Live-stream top football leagues, catch highlights, and
                       stay updated on your favorite teams — all from your
                       pocket. Premier League, La Liga, World Cup and more —
                       anytime, anywhere.
                     </p>

                   
                    
                   
                     <div className="flex flex-col sm:flex-row mt-4 md:mt-12 gap-3 md:gap-4 justify-center md:justify-start">
                        <a
                          href={version?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                           className="group flex items-center justify-center gap-3 border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-xl text-white text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                        >
 
                          <img src={playStore} className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                          <div className="text-left">
                            <div className="text-xs opacity-90">Get it on</div>
                            <div className="font-semibold">Google Play</div>
                          </div>
                        </a>
                        <a
                          href={version?.direct_link}
                          className="group flex items-center justify-center gap-3 border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-xl text-white text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                          download
                        >
                          <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
                          <div className="text-left">
                            <div className="text-xs opacity-90">Direct</div>
                            <div className="font-semibold">Download APK</div>
                          </div>
                        </a>
                      </div>
                   </div>

                 
                 </div>
    </div>
   </div>
  )
}

export default Promote