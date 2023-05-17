import React from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import CryptoCurrencySlider from "./cryptocurrencySlider";
import Sliders from "./cryptocurrencySlider/sliders";
import PieChart from "./roundPieChart";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex gap-[18px] ">
      <div className="h-full">
        <SideBar />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center h-20 bg-white w-full rounded-[10px] py-4 px-4">
          <Navbar />
        </div>
        <div>
          <Sliders />
        </div>
        <PieChart/>
      </div>
    </div>
  );
};

export default Dashboard;
