import React from 'react'
import MainLayout from './components/layouts/MainLayout'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import LivePlay from './pages/LivePlay';
import ScrollToTop from './components/ScrollToTop/index';
 
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
     
    </Routes></>
  )
}

export default App