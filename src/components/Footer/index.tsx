// import React from 'react'
import { FaDownload } from "react-icons/fa6";
import logo from "../../assets/test.png";

export default function Footer() {
  return (
    <div>
      <div className="mt-10 bg-black">
        <div className=" w-screen  text-white py-10">
          {/* <div className="text-center">
            <h3 className="text-3xl font-semibold mb-3"> Download our Boss Tv App </h3>
            <p className=" text-[15px]  text-gray-300 px-6">
              {" "}
              Live-stream top football leagues, catch highlights, and stay
              updated on your favorite teams.{" "}
            </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-4 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <a
                className="flex items-center border w-auto rounded-lg px-4 py-4 gap-4 w-44 mx-2"
                href="/downloads/pauk-tv-latest.apk"
                download
              >
                <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Direct</div>
                  <div className="font-semibold">Download APK</div>
                </div>
              </a>
            </div>
          </div> */}
         
          <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 mx-20">
            <img
              src={logo}
              alt="logo not found"
              className=" w-20 h-20 mb-4 md:mb-0 aspect-square object-cover"
            />
            <div className="order-1 md:order-2">
              <span className="px-2">Home</span>
              <span className="px-2 border-l">Matches</span>
              <span className="px-2 border-l">Highlights</span>
              <span className="px-2 border-l">News</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
