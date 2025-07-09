import React from 'react'
import logo from "../../assets/logo.png"
function NavBar() {
  return (
    <div className=' flex items-center  fixed left-0 right-0 to-0 z-50  justify-between p-2 px-12'>
        <div className="logo">
        <img src={logo} alt="logo not found" className=' w-24 h-24' />
        </div>

        <div className=' flex flex-row items-center gap-10'>
            <div>Home</div>
            <div>Matches</div>
            <div>Highlights</div>
            <div>Channels</div>
            <div>News</div>
        </div>
    </div>
  )
}

export default NavBar