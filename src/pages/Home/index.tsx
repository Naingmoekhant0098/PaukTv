import React from 'react'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import CategorySlider from '../../components/Slider/CategorySlider'
import Preloader from '../../components/Preloader'
import { useQuery } from '@tanstack/react-query'
import matcheService from '../../services/matcheService'
function Home() {
  const {data,isLoading} = useQuery({ queryKey: ['matches'], queryFn: matcheService.fetchMatches })
  
  if(isLoading) {
    return <Preloader />
  }
  return (
    <div>
      {/* <Preloader /> */}
      <Banner />
      <Slider   title='Live Matches' link='/all' data={data?.liveMatches} isSwitch={false}/>
      <Slider  title='Today Matches' link='/all' data={{today : data?.today , tomorrow : data?.tomorrow}} isSwitch={true}/>
      <Slider  title='TODAY HIGHLIGHTS' link='/all' data={data?.today} isSwitch={false}/>
      <CategorySlider  title='browse by category' link='/all' data={[]}/>
    </div>
    // tomorrow
  )
}

export default Home