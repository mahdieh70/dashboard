import React, { useEffect, useState } from "react";

//api
import { getCoin } from "../../../services/api";

//function
import { convertPxToVh } from "../../../utils/convertUnit";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

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
    <div className="max-w-screen mt-3 mb-3 px-8">
      <div>
        <div className="w-full">
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {coins.map((coin) => (
                <SwiperSlide key={coin.id}>
                  <div
                    className=" bg-white rounded-[16px] px-3 py-3"
                    style={{ height: `${convertPxToVh(171)}vh` }}
                  >
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
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                        <p className=" text-[14px]">
                          {coin.current_price} دلار
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-1/2"></div>
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
