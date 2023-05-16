import React from "react";
import Slider from "react-slick";


const CryptoCurrencySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Slider {...settings}>
   
      </Slider>
    </>
  );
};

export default CryptoCurrencySlider;
