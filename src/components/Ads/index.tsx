import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import matcheService from "../../services/matcheService";

function Ads() {
  const [isAdsShow, setisAdsShow] = useState(true);
  const [counter, setCounter] = useState(1);
 
  const { data } = useQuery({
    queryKey: ["ads"],
    queryFn: () => matcheService.fetchAds({}),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount: any) => (prevCount !== 6 ? prevCount + 1 : 6));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 
const [currentAds,setCurrentAds] = useState<any>(null);

  useEffect(()=>{
    if(data?.ads?.length >0){
        const index = Math.floor(Math.random() * data?.ads?.length);
      
       setCurrentAds( data?.ads[index])
    }

  },[data])


  return (
    <div
      onClick={() => counter == 5 && setisAdsShow(false)}
      className={`popup fixed top-0 bg-black/70 z-50 right-0 left-0 h-screen w-screen  flex  justify-center  items-center ${
        isAdsShow ? "block" : "hidden"
      }`}
    >
      <div className=" w-[90%] md:w-[50%] bg-slate-900 min-h-[40%] p-1 rounded-xl">
        <img
          className=" w-full rounded-lg h-[200px] md:h-[300px] object-cover"
          src={data?.ads?.length > 0 && currentAds?.imageUrl}
          alt=""
        />
        <div className=" px-2 pb-3">
          <div className=" mt-3 font-medium md:font-semibold opacity-85 p-2">
           {data?.ads?.length > 0 && currentAds?.title}
          </div>
          <div className=" flex">
            {counter === 6 ? (
              <button
                onClick={() => setisAdsShow(false)}
                className=" cursor-pointer mx-auto border border-gray-400 w-full text-gray-200 font-semibold px-10 text-[14px] py-3 mt-2 mb-2 rounded-lg"
              >
                Skip Ads
              </button>
            ) : (
              <button className=" mx-auto border opacity-50 cursor-pointer border-gray-400 w-full text-gray-200 font-semibold px-10 text-[14px] py-3 mt-2 mb-2 rounded-lg">
                Skip Ads in {counter} seconds
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
