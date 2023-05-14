import React from "react";
//logo

import logo from "../../assets/Logo.png";

const ProgressBar = () => {
  return (
    <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
      <div className="flex items-center flex-col pt-[60px]">
        <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
        <h2>ثبت نام</h2>
      </div>
      <div></div>
    </div>
  );
};

export default ProgressBar;
