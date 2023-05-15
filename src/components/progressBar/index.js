import React from "react";
import { Item } from "./item";

//logo
import logo from "../../assets/Logo.png";

const ProgressBar = ({ active }) => {
  return (
    <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
      <div className="flex items-center flex-col pt-[60px] mb-10">
        <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
        <h1 className="text-white text-[30px]">ثبت نام</h1>
      </div>
      <div className="pr-8 pt-[35px]">
        <Item
          status={active === 1 ? "active" : active > 1 && "completed"}
          text="اطلاعات فردی"
        />
        <Item
          status={active === 2 ? "active" : active > 2 && "completed"}
          text="اطلاعات ارتباطی"
        />
        <Item
          isLast
          status={active === 3 ? "active" : active > 3 && "completed"}
          text="اطلاعات مکانی"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
