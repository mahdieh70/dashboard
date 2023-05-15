
import React from "react";

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
        <div className="flex items-center pb-[10px]">
          <div
            className={
              active === "registerActive"
                ? "w-8 h-8 bg-[#9CC4F2] rounded-full border-[3.5px] border-solid border-white"
                : "w-8 h-8 bg-[#9CC4F2] rounded-full"
            }
          ></div>
          <div
            className={
              active === "registerActive"
                ? "text-white text-[18px] mr-6 tracking-[1px]"
                : "text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]"
            }
          >
            اطلاعات فردی
          </div>
        </div>
        <span className="border-[1.5px] border-solid border-white relative right-[15px]"></span>
        <div className="flex items-center pb-[10px] pt-[10px]">
          <div
            className={
              active === "sendingCodeActive" ||
              active === "verificationCodeActive"
                ? "w-8 h-8 bg-[#9CC4F2] rounded-full border-[3.5px] border-solid border-white"
                : "w-8 h-8 bg-[#9CC4F2] rounded-full"
            }
          ></div>
          <div
            className={
              active === "sendingCodeActive" ||
              active === "verificationCodeActive"
                ? "text-white text-[18px] mr-6 tracking-[1px]"
                : "text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]"
            }
          >
            اطلاعات ارتباطی
          </div>
        </div>
        <span className="border-[1.5px] border-solid border-white relative right-[15px]"></span>
        <div className="flex items-center pb-[10px] pt-[10px]">
          <div className="w-8 h-8 bg-[#9CC4F2] rounded-full"></div>
          <div className="text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]">
            اطلاعات مکانی
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
