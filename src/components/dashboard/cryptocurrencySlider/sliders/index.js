import React, { useEffect, useRef, useState } from "react";
import { getCoin } from "../../../../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const test = [
  { price: 123232, name: "btc", id: 1, percent: 1.4 },
  { price: 123232, name: "btc", id: 2, percent: 1.4 },
  { price: 123232, name: "btc", id: 3, percent: 1.4 },
  { price: 123232, name: "btc", id: 4, percent: 1.4 },
  { price: 123232, name: "btc", id: 5, percent: 1.4 },
  { price: 123232, name: "btc", id: 6, percent: 1.4 },
  { price: 123232, name: "btc", id: 7, percent: 1.4 },
  { price: 123232, name: "btc", id: 8, percent: 1.4 },
  { price: 123232, name: "btc", id: 9, percent: 1.4 },
];

const Sliders = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      setCryptoCurrencies(data);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (!ref?.current?.clientWidth) {
      return;
    }
    setWidth(ref?.current?.clientWidth);
  }, [ref?.current?.clientHeight]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div ref={ref} class>
      <div style={{ width }}>
        <Slider {...settings}>
          {(test || []).map((item, index) => (
            <div>
              <div className="h-[100px]  bg-rose-700" style={{ margin: 20 }}>
                {index}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
