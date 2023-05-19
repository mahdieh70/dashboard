import React, { useState } from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import CryptoCurrencySlider from "./cryptocurrencySlider";
import { LastWeekTradingValue } from "./lastWeekTradingValue";

import PieChart from "./roundPieChart";
import MostFavoriteCoins from "./mostFavoriteCoins";
import { convertPxToVh } from "../../utils/convertUnit";

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
          <div
            className="flex gap-[18px]"
           
          >
            <PieChart />
            <div
              className="bg-white flex justify-center items-center rounded-[16px] px-4 py-4 "
              style={{
                width: "33.33%",
                height: `${convertPxToVh(218)}vh`,
              }}
            >
              <LastWeekTradingValue />
            </div>
            <div className="w-[33.33%] overflow-auto scrollbar-hide rounded-[16px]" style={{ height: `${convertPxToVh(545)}vh`,scrollbarWidth:"0px"}}>
              <MostFavoriteCoins />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
