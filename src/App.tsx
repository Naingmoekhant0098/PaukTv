import React from 'react'
import MainLayout from './components/layouts/MainLayout'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
 
function App() {
  return (
    <Routes>
    <Route path="/" element={
      <MainLayout>
        <Home />
      </MainLayout>
    } />
     
    </Routes>
  )
}

export default App