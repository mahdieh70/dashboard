import React, { useEffect, useState } from "react";

import { getCoin } from "../../../services/api";

import chart from "../../../assets/images/NBcharts-lineChats.svg";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// const test = [
//   { price: 123232, name: "btc", id: 1, percent: 1.4 },
//   { price: 123232, name: "btc", id: 2, percent: 1.4 },
//   { price: 123232, name: "btc", id: 3, percent: 1.4 },
//   { price: 123232, name: "btc", id: 4, percent: 1.4 },
//   { price: 123232, name: "btc", id: 5, percent: 1.4 },
//   { price: 123232, name: "btc", id: 6, percent: 1.4 },
//   { price: 123232, name: "btc", id: 7, percent: 1.4 },
//   { price: 123232, name: "btc", id: 8, percent: 1.4 },
//   { price: 123232, name: "btc", id: 9, percent: 1.4 },
// ];

const CryptoCurrencySlider = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchApi();
  }, []);

  return (
    <div className="max-w-screen mt-3 mb-3">
      <div>
        <div className="w-full">
          <div>
            <Swiper
              style={{
                "--swiper-pagination-color": "#FFBA08",

                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "15px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              // navigation={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {coins.map((coin) => (
                <SwiperSlide key={coin.id}>
                  <div className=" bg-white h-[180px] rounded-[16px] px-3 py-3">
                    <div className="flex justify-between">
                      <div className="flex">
                        <div className="w-[46px] h-[46px]">
                          <img src={coin.image} alt={coin.name} />
                        </div>
                        <div>
                          <p>{coin.name}</p>
                          <p className="uppercase text-[#AEAEAE] text-[]">
                            {coin.symbol}
                          </p>
                        </div>
                      </div>
                      <div className="w-[70px]">
                        <p className="text-[#29C57A]">
                          {coin.price_change_percentage_24h}%
                        </p>
                        <p className=" text-[14px]">
                          {coin.current_price} دلار
                        </p>
                      </div>
                    </div>
                    <div className=" w-full h-1/2 inline-block">
                      <img src={chart} alt="chart" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencySlider;
