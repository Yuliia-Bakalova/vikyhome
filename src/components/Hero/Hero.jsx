import React from "react";
import img1 from "../../images/img3.jpg";
import img2 from "../../images/viky.jpg";

import {
  Wrap,
  Title,
  WrapTitle,
  WrapBox,
  Image,
  ImageSec,
  TitleDesc
} from "./Hero.styled";

const Hero = () => {

  return (
    <Wrap>

<WrapTitle>
  <Title> vikyhome</Title>
  <TitleDesc>cleaning company</TitleDesc>
</WrapTitle>
<WrapBox>
<Image src={img2} alt="image"/>
<ImageSec src={img1} alt="image"/>
</WrapBox>
       </Wrap>
  );
};

export default Hero;


