import React from "react";
// import SideBar from "./sidebar";
import Navbar from "./navbar";
import CryptoCurrencySlider from "./cryptocurrencySlider";

import PieChart from "./roundPieChart";

const Dashboard = () => {
  return (
    <div className="w-full h-screen">
      <div className="px-8 py-8 ">
        <Navbar />
        {/* <SideBar /> */}
        <CryptoCurrencySlider />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
