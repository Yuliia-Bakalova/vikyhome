import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Wrapper,
  Title,
  Box,
  Image,
  WrapSlider,

} from "../BeforeAfter/BeforeAfter.styled";
import after1 from "../../images/after1.jpeg";
import after2 from "../../images/after2.jpeg";
import after3 from "../../images/after3.jpg";
import after4 from "../../images/after4.jpg";
import after5 from "../../images/after5.jpeg";
import after6 from "../../images/after6.jpeg";
import after7 from "../../images/after7.jpeg";
import before1 from "../../images/before1.jpeg";
import before2 from "../../images/before2.jpeg";
import before3 from "../../images/before3.jpg";
import before4 from "../../images/before4.jpg";




const BeforeAfter = () => {
  const photos = [
    after1,
    before1,
    after2,
    before2,
    after3,
    before3,
    after4,
    before4,
    after5,
    after6,
    after7,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "20px",
    adaptiveHeight: true,
  
  };

  return (
    <Wrapper>
      <Box>
        <Title>До і Після</Title>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <WrapSlider key={index}>
              <Image src={photo} alt={`Photo ${index + 1}`} />
            </WrapSlider>
          ))}
        </Slider>
      </Box>
    </Wrapper>
  );
};

export default BeforeAfter;
