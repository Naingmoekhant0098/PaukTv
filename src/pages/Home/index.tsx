import Banner from "../../components/Banner";
import Slider from "../../components/Slider";
import CategorySlider from "../../components/Slider/CategorySlider";
// import Preloader from "../../components/Preloader";
import { useQuery } from "@tanstack/react-query";
import matcheService from "../../services/matcheService";
// import ImageGallery from '../../components/ImageGallery'
import NewsSlider from "../../components/Slider/NewsSlider";
import HighlightSlider from "../../components/Slider/HighlightSlider";
import Preloader from "../../components/Preloader";
 
function Home({setIsAdsShow  ,handleCurrentVideo} : {  setIsAdsShow : (value : boolean)=>void,
  handleCurrentVideo : (item:any , type:string)=>void}) {
  const { data , isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: matcheService.fetchMatches,
  });
  // const {data:hightlightData,isLoading : hightLightLoading} = useQuery({ queryKey: ['hightLights'], queryFn: matcheService.fetchHighlights })
  const { data: categoryData } = useQuery({
    queryKey: ["channcels"],
    queryFn: matcheService.fetchChannel,
  });



  const { data: newsData } = useQuery({
    queryKey: ["home-news"],
    queryFn: matcheService.fetchNews,
  });
  const { data: hightlightData} = useQuery({
    queryKey: ["hightlights"],
    queryFn: () =>
      matcheService.fetchHighlightsFromYt("football highlights", 10),
  });

  if(isLoading) {
    return <Preloader />
  }

 
  return (
    <div>
     
      <Banner />
      <Slider
        setIsAdsShow={setIsAdsShow}
        handleCurrentVideo={handleCurrentVideo}
        title="Live Matches"
        link="/matches"
        data={data?.liveMatches}
        isSwitch={false}
      />
      <Slider
        setIsAdsShow={setIsAdsShow}
        handleCurrentVideo={handleCurrentVideo}
        title="Today Matches"
        link="/matches"
        data={{ today: data?.today, tomorrow: data?.tomorrow }}
        isSwitch={true}
      />

      <CategorySlider
        title="browse by category"
        data={categoryData}
        link="/all"
      />
      <HighlightSlider
        setIsAdsShow={setIsAdsShow}
        handleCurrentVideo={handleCurrentVideo}
        title="HIGHLIGHTS"
        link="/highlights"
        data={hightlightData}
      />
      <NewsSlider
        setIsAdsShow={setIsAdsShow}
        handleCurrentVideo={handleCurrentVideo}
        title="Latest News"
        link="/news"
        data={newsData?.data && newsData?.data}
      />
      {/* <ImageGallery  title='Latest Photo Albumn' link='/news' data={newsData?.data && newsData?.data} /> */}
    </div>
    // tomorrow
  );
}

export default Home;
