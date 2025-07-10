import React from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import Drawer from "react-modern-drawer";
import { RxCross2 } from "react-icons/rx";
import "react-modern-drawer/dist/index.css";
import { IoIosHome } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { BsNewspaper } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="">
      <div className=" flex items-center  fixed left-0 right-0 to-0 z-50  justify-between p-2 px-3 md:px-12">
        <div className="logo">
          <img
            src={logo}
            alt="logo not found"
            className=" w-18 md:w-24 h-18 md:h-24"
          />
        </div>

        <div className=" block md:hidden lg:hidden" onClick={toggleDrawer}>
          <FaBars size={24} className=" mr-2" />
        </div>
        <div className=" hidden md:block">
          <div className=" flex flex-row items-center gap-10 ">
            <div>Home</div>
            <div>Matches</div>
            <div>Highlights</div>
            <div>Channels</div>
            <div>News</div>
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
           <div  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311] text-md"> <IoIosHome size={24} /><div className=" text-[14px] font-medium">
           Home</div></div>
            <div  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <FaRegListAlt size={20} />
            <div className=" text-[14px] font-medium">
            Matches</div></div>
            <div  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <LuListTodo size={24} />
            <div className=" text-[14px] font-medium">
            Highlights</div></div>
            <div  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <MdLiveTv size={24} />
            <div className=" text-[14px] font-medium">
            Channels</div></div>
           
            <div  className=" flex items-center gap-3 transition-all duration-300 hover:text-[#F65311]"> <BsNewspaper size={24} />  <div className=" text-[14px] font-medium">
            News</div></div>
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
