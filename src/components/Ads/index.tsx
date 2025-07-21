import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import matcheService from "../../services/matcheService";

type AdsProps = {
  isShowAd: boolean;
  setIsAdsShow: (value: boolean) => void;
  handleAdsDone: () => void;
};

function Ads({ isShowAd, setIsAdsShow, handleAdsDone }: AdsProps) {
  const [counter, setCounter] = useState(1);
  const [currentAd, setCurrentAd] = useState<any>(null);

  const { data } = useQuery({
    queryKey: ["ads"],
    queryFn: () => matcheService.fetchAds({}),
    staleTime: 1000 * 60 * 5,
  });

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < 6 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    if (data?.ads?.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.ads.length);
      setCurrentAd(data.ads[randomIndex]);
    }
  }, [data]);

   
  const handleOverlayClick = () => {
    if (counter >= 5) {
      setIsAdsShow(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`popup fixed top-0 bg-black/70 z-50 right-0 left-0 h-screen w-screen flex justify-center items-center ${
        isShowAd ? "block" : "hidden"
      }`}
    >
      <div className="w-[90%] md:w-[50%] bg-slate-900 min-h-[40%] p-1 rounded-xl">
        <img
          className="w-full rounded-lg h-[200px] md:h-[300px] object-cover"
          src={currentAd?.imageUrl}
          alt={currentAd?.title || "Ad"}
        />
        <div className="px-2 pb-3">
          <div className="mt-3 font-medium md:font-semibold opacity-85 p-2">
            {currentAd?.title}
          </div>
          <div className="flex">
            {counter >= 6 ? (
              <button
                onClick={() => {
                  setIsAdsShow(false);
                  handleAdsDone();
                }}
                className="cursor-pointer mx-auto border border-gray-400 w-full text-gray-200 font-semibold px-10 text-[14px] py-3 mt-2 mb-2 rounded-lg"
              >
                Skip Ads
              </button>
            ) : (
              <button
                disabled
                className="mx-auto border opacity-50 cursor-not-allowed border-gray-400 w-full text-gray-200 font-semibold px-10 text-[14px] py-3 mt-2 mb-2 rounded-lg"
              >
                Skip Ads in {counter} second{counter !== 1 ? "s" : ""}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
