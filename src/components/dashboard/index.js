import React from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex gap-[18px] ">
      <div className="h-full">
        <SideBar />
      </div>
      <div className="flex justify-between items-center h-20 bg-white w-full rounded-[10px] py-4 px-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
