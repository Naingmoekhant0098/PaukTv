import React from 'react'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import CategorySlider from '../../components/Slider/CategorySlider'
function Home() {
  return (
    <div>
      <Banner />
      <Slider   title='Live Matches' link='/all' data={[]}/>
      <Slider  title='Today Matches' link='/all' data={[]}/>
      <Slider  title='TODAY HIGHLIGHTS' link='/all' data={[]}/>
      <CategorySlider  title='browse by category' link='/all' data={[]}/>
    </div>
  )
}

export default Home