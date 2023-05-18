import React, { useEffect, useState } from "react";

import { getCoin } from "../../../services/api";

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
    <div className="max-w-screen mt-[10px]">
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
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              navigation={{ clickable: true }}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
            >
              {coins.map((coin) => (
                <SwiperSlide key={coin.id}>
                  <div className=" bg-white h-[180px] rounded-[16px]">
                    <div>
                      <div>
                        <img src={coin.image} alt={coin.name}/>
                      </div>
                      <div></div>
                    </div>
                    <div></div>
                    
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
