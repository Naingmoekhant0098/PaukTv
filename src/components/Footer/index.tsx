import React from 'react'
import logo from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className=' mt-10 bg-black p-4  px-12  flex items-center justify-between ' >
         <div className="logo">
        <img src={logo} alt="logo not found" className=' w-24 h-24' />
        </div>
        <div className=' text-[14px] hidden md:block tracking-wider'>
        © 2025 Lift Media. All Rights Reserved. 
        </div>

        <div  className=' flex items-center gap-3 '>
            <div className='  border p-3 border-gray-500 rounded-full'>
                <FaFacebookF  size={20}/>
            </div>
            <div className='  border p-3 border-gray-500 rounded-full'>
                <FaTelegramPlane size={20} />
            </div>
            <div className='  border p-3 border-gray-500 rounded-full'>
                <FaPhone  size={20}/>
            </div>
            

        </div>
    </div>
  )
}
