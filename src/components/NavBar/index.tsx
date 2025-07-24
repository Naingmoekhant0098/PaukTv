import React, { useEffect, useState } from "react";
import logo from "../../assets/test.png";
import { FaBars } from "react-icons/fa6";
import Drawer from "react-modern-drawer";
import { RxCross2 } from "react-icons/rx";
import "react-modern-drawer/dist/index.css";
import { IoIosHome } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { BsNewspaper } from "react-icons/bs";
// import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [showNavbar, setShowNavBar] = useState("topNav");
  const [scrollY, setScrollY] = useState(0);

  const constrolScroll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > scrollY) {
        setShowNavBar("hideNav");
      } else {
        setShowNavBar("showNav");
      }
      setScrollY(window.scrollY);
    } else {
      setShowNavBar("topNav");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", constrolScroll);
  }, [scrollY]);


  return (
    <div className="">
      <div className={`navBar flex items-center  transition-all duration-300 fixed left-0 right-0 to-0 z-50  justify-between p-3 px-3 md:px-12 ${showNavbar}`}>
        <Link to={'/'} className="logo  aspect-square">
          <img
            src={logo}
            alt="logo not found"
            className=" w-16 md:w-18 h-16 md:h-18  object-cover"
          />
          {/* <div className=" font-semibold text-[#E9376E] text-center ">Boss Tv</div> */}
        </Link>

        <div className=" block md:hidden lg:hidden" onClick={toggleDrawer}>
          <FaBars size={24} className=" mr-2" />
        </div>
        <div className=" hidden md:block ">
          <div className=" flex flex-row items-center gap-10 mr-6">
            <Link to={'/'} className=" cursor-pointer nav">Home</Link>
            <Link to={'/matches'} className=" cursor-pointer nav">Matches</Link>
            <Link  to={'/highlights'} className=" cursor-pointer nav">Highlights</Link>
            {/* <Link  to={'/channels'} className=" cursor-pointer nav">Channels</Link> */}
            <Link  to={'/news'} className=" cursor-pointer nav">News</Link>
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ overflow: "hidden", background: "#071523", padding: "30px" }}
      >
        <div className=" ">
          <div className="flex justify-end" onClick={toggleDrawer}>
            <RxCross2 size={30} className=" font-extrabold" />
          </div>
          <div className=" mt-30 flex    justify-center items-center">
           <div className=" flex flex-col gap-10">
           <Link  onClick={()=>setIsOpen(false)} to={'/'}  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311] text-md"> <IoIosHome size={24} /><div className=" text-[14px] font-medium">
           Home</div></Link>
            <Link  onClick={()=>setIsOpen(false)} to={'/matches'}  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <FaRegListAlt size={20} />
            <div className=" text-[14px] font-medium">
            Matches</div></Link>
            <Link  onClick={()=>setIsOpen(false)} to={'/highlights'}  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <LuListTodo size={24} />
            <div className=" text-[14px] font-medium">
            Highlights</div></Link>
            
           
            <Link  onClick={()=>setIsOpen(false)} to={'/news'}  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <BsNewspaper size={24} />  <div className=" text-[14px] font-medium">
            News</div></Link>
           </div>
            
          </div>
        </div>
      </Drawer>

      {/* <div className=" w-[100vw] h-[100%] overflow-hidden z-50 bg-red-200 fixed left-0 right-0">

    </div> */}
    </div>
  );
}

export default NavBar;
