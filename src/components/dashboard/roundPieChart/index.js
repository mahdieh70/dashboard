import React from "react";

const RoundPieChart = () => {
  return (
    <div className="w-[372px] h-[218px] bg-white rounded-[16px] px-[13px] py-[14px] flex gap-[38px] mt-10">
      <div>
        <p>دارایی های کیف پول</p>
        <div className="mt-[22px]">
          <div className="flex items-center">
            <span className="w-[10px] h-[10px] bg-[#F7931A] inline-block rounded-full "></span>
            <p className="mx-[10px]">بیتکوین</p>
            <span className="text-[13px] text-[#AEAEAE]">45درصد</span>
          </div>
          <div className="flex items-center my-[11px]">
            <span className="w-[10px] h-[10px] bg-[#7EB6F7] inline-block rounded-full "></span>
            <p className="mx-[10px]">اتریوم</p>
            <span className="text-[13px] text-[#AEAEAE]">30درصد</span>
          </div>
          <div className="flex items-center">
            <span className="w-[10px] h-[10px] bg-[#2E2E2E] inline-block rounded-full "></span>
            <p className="mx-[10px]">ترون</p>
            <span className="text-[13px] text-[#AEAEAE]">25درصد</span>
          </div>
        </div>
      </div>
      <div className="w-[180px] h-[180px] bg-[red]"></div>
    </div>
  );
};

export default RoundPieChart;
