import React, { useState } from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import CryptoCurrencySlider from "./cryptocurrencySlider";
import LastWeekTradingValue from "./lastWeekTradingValue";

import PieChart from "./roundPieChart";
import MostFavoriteCoins from "./mostFavoriteCoins";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const clickHandler = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="w-full h-screen">
      <div className="px-8 py-8 flex gap-5 h-full ">
        <SideBar showSidebar={showSidebar} />

        <div className={showSidebar ? "max-w-[1190px]" : "max-w-full"}>
          <div>
            <Navbar clickHandler={clickHandler} />
            <CryptoCurrencySlider />
          </div>
          <div className="flex gap-[18px]">
            <PieChart />
            <LastWeekTradingValue />
            <MostFavoriteCoins />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
