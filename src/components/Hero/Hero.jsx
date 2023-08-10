import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img5 from "../../images/img5.jpg";

import {
  Wrap,
  WrapSlider,
  Dot,
  SlideImage,
  Title,
} from "./Hero.styled";

const Hero = () => {


  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <Wrap>
      <Title> VikyHome</Title>
      <Slider {...settings}>

        <WrapSlider>
          <SlideImage src={img1} alt="photo1" />
        </WrapSlider>
     
        <WrapSlider>
          <SlideImage src={img2} alt="photo2" />
        </WrapSlider>

        <WrapSlider>
          <SlideImage src={img5} alt="photo5" />
        </WrapSlider>
    
      </Slider>
      <Dot  />
       </Wrap>
  );
};

export default Hero;


