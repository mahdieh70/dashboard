import React from "react";
import Chart from "react-apexcharts";
import { convertPxToVh } from "../../../utils/convertUnit";

const RoundPieChart = () => {
  const options = {
    chart: {
      height: 100,
      type: "pie",
    },
    labels: ["بیت کوین", "اتریوم", "ترون"],
    colors: ["#F7931A", "#7EB6F7", "#2E2E2E"],
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      style: {
        colors: ["#fff"],
      },
    },
  };

  return (
    <div className="w-[33.33%]  bg-white rounded-[16px] px-[13px] py-[14px] flex gap-[38px] "  style={{ height: `${convertPxToVh(218)}vh` }}>
      <Chart
        type="pie"
        width={300}
        height={300}
        series={[350, 240, 320]}
        options={options}
      ></Chart>

      <div>
        {/* <p>دارایی های کیف پول</p> */}
        {/* <div className="mt-[22px]">
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
        </div> */}
      </div>
    </div>
  );
};

export default RoundPieChart;
