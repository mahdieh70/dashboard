import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { getTradingValue } from "../../../services/api";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const LastWeekTradingValue = () => {
  const [tradeValue, setTradeValue] = useState([]);

  const series = [
    //data on the y-axis
    {
      name: "value of trading",
      data: [0, 25, 50, 75, 100],
    },
  ];

  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [""],
    },
  };

 

    useEffect(() => {
      const fetchApi = async () => {
        const data = await getTradingValue();
        setTradeValue(data);
      };
      fetchApi();
    }, []);

  
  return (
    <div className="w-[33.33%] h-[218px] bg-white rounded-[16px] px-[13px] py-[14px] flex gap-[38px]">
      <Chart options={options} series={series} type="bar" width="372" height="218"/>
    </div>
  );
};

export default LastWeekTradingValue;
