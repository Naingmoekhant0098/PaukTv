
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import CategorySlider from '../../components/Slider/CategorySlider'
import Preloader from '../../components/Preloader'
import { useQuery } from '@tanstack/react-query'
import matcheService from '../../services/matcheService'
import ImageGallery from '../../components/ImageGallery'
import NewsSlider from '../../components/Slider/NewsSlider'
function Home() {
  const {data,isLoading} = useQuery({ queryKey: ['matches'], queryFn: matcheService.fetchMatches })
  const {data:hightlightData,isLoading : hightLightLoading} = useQuery({ queryKey: ['hightLights'], queryFn: matcheService.fetchHighlights })
  const {data:categoryData,isLoading : categoryLoading} = useQuery({ queryKey: ['channels'], queryFn: matcheService.fetchChannel })
    const {data:newsData,isLoading:newLoading} = useQuery({ queryKey: ['home-news'], queryFn: matcheService.fetchNews});
 
  if(isLoading && hightLightLoading) {
    return <Preloader />
  }
  return (
    <div>
      {/* <Preloader /> */}
      <Banner />
      <Slider   title='Live Matches' link='/matches' data={data?.liveMatches} isSwitch={false}/>
      <Slider  title='Today Matches' link='/matches' data={{today : data?.today , tomorrow : data?.tomorrow}} isSwitch={true}/>
     
      <CategorySlider  title='browse by category' data={categoryData} link='/all' />
      <Slider  title='HIGHLIGHTS' link='/highlights' data={hightlightData} isSwitch={false}/>
      <NewsSlider  title='Latest News' link='/news' data={newsData?.data && newsData?.data} />
      <ImageGallery  title='Latest Photo Albumn' link='/news' data={newsData?.data && newsData?.data} />
   
    </div>
    // tomorrow
  )
}

export default Home