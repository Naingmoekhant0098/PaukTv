// import React from 'react'
import MainLayout from './components/layouts/MainLayout'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import LivePlay from './pages/LivePlay';
import ScrollToTop from './components/ScrollToTop/index';
import Channels from './pages/Channels';
import Matches from './pages/Matches';
import Highlights from './pages/Highlights';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import "swiper/css";
import Ads from './components/Ads';
import { useState } from 'react';
import YoutubePlay from './pages/YoutubePlay';
 
function App() {
  const [isShowAd, setIsAdsShow] = useState(false);
  const [currentSelectedVideo, setCurrentSelectedVideo] = useState();
  const [currentSelectedType, setCurrentSelectedType] = useState("");
  const handleCurrentVideo = (item: any, type: string) => {
    setCurrentSelectedType(type);
    setCurrentSelectedVideo(item);
  };
  const navigate = useNavigate();
  const handleAdsDone = () => {
    if (currentSelectedType == "match") {
      navigate("/match-details", { state: currentSelectedVideo });
    }else if(currentSelectedType == "highlight"){
      navigate("/youtube-play", { state: currentSelectedVideo });
    }else if(currentSelectedType == "news"){
      navigate(`/news-detail/${currentSelectedVideo}`)
    }
   
  };
  return (
   <>
    {isShowAd && (
        <Ads
          isShowAd={isShowAd}
          setIsAdsShow={setIsAdsShow}
          handleAdsDone={handleAdsDone}
        />
      )}
   <ScrollToTop />
    <Routes>
    <Route path="/" element={
      <MainLayout>
        <Home  setIsAdsShow={setIsAdsShow} handleCurrentVideo={handleCurrentVideo}/>
      </MainLayout>
    } />
    <Route path="/match-details" element={
      <MainLayout>
        <Detail  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo} />
      </MainLayout>
    } />
     <Route path="/live-match" element={
      <MainLayout>
        <LivePlay  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo} />
      </MainLayout>
    } />
     <Route path="/youtube-play" element={
      <MainLayout>
        <YoutubePlay  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo} />
      </MainLayout>
    } />
     <Route path="/channel-posts" element={
      <MainLayout>
        <Channels />
      </MainLayout>
    } />
     <Route path="/matches" element={
      <MainLayout>
        <Matches  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo}/>
      </MainLayout>
    } />
      <Route path="/highlights" element={
      <MainLayout>
        <Highlights  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo} />
      </MainLayout>
    } />
    <Route path="/news" element={
      <MainLayout>
        <News setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo} />
      </MainLayout>
    } />
     <Route path="/news-detail/:id" element={
      <MainLayout>
        <NewsDetail  setIsAdsShow={setIsAdsShow}
             handleCurrentVideo={handleCurrentVideo}/>
      </MainLayout>
    } />
    </Routes>
    
    
    
    </>
    
  )
}

export default App