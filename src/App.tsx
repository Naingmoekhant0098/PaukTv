import React from 'react'
import MainLayout from './components/layouts/MainLayout'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import LivePlay from './pages/LivePlay';
import ScrollToTop from './components/ScrollToTop/index';
import Channels from './pages/Channels';
import Matches from './pages/Matches';
import Highlights from './pages/Highlights';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
 
function App() {
  return (
   <>
   <ScrollToTop />
    <Routes>
    <Route path="/" element={
      <MainLayout>
        <Home />
      </MainLayout>
    } />
    <Route path="/match-details" element={
      <MainLayout>
        <Detail />
      </MainLayout>
    } />
     <Route path="/live-match" element={
      <MainLayout>
        <LivePlay />
      </MainLayout>
    } />
     <Route path="/channel-posts" element={
      <MainLayout>
        <Channels />
      </MainLayout>
    } />
     <Route path="/matches" element={
      <MainLayout>
        <Matches />
      </MainLayout>
    } />
      <Route path="/highlights" element={
      <MainLayout>
        <Highlights />
      </MainLayout>
    } />
    <Route path="/news" element={
      <MainLayout>
        <News />
      </MainLayout>
    } />
     <Route path="/news-detail/:id" element={
      <MainLayout>
        <NewsDetail />
      </MainLayout>
    } />
    </Routes>
    
    
    
    </>
    
  )
}

export default App