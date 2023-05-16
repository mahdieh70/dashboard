import React from "react";
import logo from "../../../assets/logo/Logo (1).svg";

//icons
import homeIcon from "../../../assets/icons/home3.svg";
import buyAndSell from "../../../assets/icons/arrangehorizontalsquare.png";
import activity from "../../../assets/icons/activity.png";
import wallet from "../../../assets/icons/emptywallet.png";
import logout from "../../../assets/icons/logout.png";
const SideBar = () => {
  return (
    <div className="w-[250px] h-full bg-white rounded-[10px] px-[29px] ">
      <div className="flex items-center flex-col border-b border-solid border-[#D6D6D6]">
        <img src={logo} alt="logo" />
        <p className="text-[16px] mt-4 mb-[15px]">نیوکوین اسپیس</p>
      </div>
      <div>
        <ul>
          <li className="flex gap-4 items-center w-[193px] h-[49px] bg-[#388AEA] rounded-[16px] py-3 px-[18px] mt-6 mb-6">
            <img src={homeIcon} alt="home" width={20} height={20} />
            <span className="text-white">داشبورد</span>
          </li>
          <li className="flex gap-4 items-center w-[193px] h-[49px] py-3 px-[18px] mt-6 mb-6">
            <img src={buyAndSell} alt="buyAndSell" width={20} height={20} />
            <span className="text-[#1E1E1E]">خرید و فروش</span>
          </li>
          <li className="flex gap-4 items-center w-[193px] h-[49px] py-3 px-[18px] mt-6 mb-6">
            <img src={activity} alt="activity" width={20} height={20} />
            <span className="text-[#1E1E1E]">گزارش بازار</span>
          </li>
          <li className="flex gap-4 items-center w-[193px] h-[49px] py-3 px-[18px] mt-6 mb-6">
            <img src={wallet} alt="wallet" width={20} height={20} />
            <span className="text-[#1E1E1E]">کیف پول</span>
          </li>
          <li className="flex gap-4 items-center w-[193px] h-[49px] py-3 px-[18px] mt-6 mb-6">
            <img src={logout} alt="logout" width={24} height={24} />
            <span className="text-[#EA3838]">خروج</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
