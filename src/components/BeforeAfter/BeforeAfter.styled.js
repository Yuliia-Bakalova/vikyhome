import styled from 'styled-components';
import DEVICE from "./../../constants/deviceSize";


export const Wrapper =styled.div`
padding: 20px;
margin-right:auto;
margin-left:auto;
background-color: #8d8d8dac;
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 20px;
margin-bottom: 20px;

@media ${DEVICE.mobile} {
display: block;
}
@media ${DEVICE.tablet} {
  display:flex;
justify-content: space-around;
}
@media ${DEVICE.laptop} {
  display:flex;
justify-content: space-around;
}
`;

export const Title = styled.h1`
 color: ${p => p.theme.colors.titleMainColor};
 display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  font-size: 17px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 27px;
  margin-bottom: 35px;
}
`;

export const Box =styled.div`
margin-bottom: 30px;
margin-top: 10px;

@media ${DEVICE.tablet} {
  margin-bottom: 10px;
  margin-top: 10px;
}
@media ${DEVICE.laptop} {
  min-width: 1200px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 40px;
}
`;

export const Image = styled.img`

margin: 0 auto;

 width: 600px;
height: 500px;


@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  width: 950px;
height: 900px;

}
`;

export const WrapSlider =styled.div`

display: flex; 
justify-content: center;

`;



export const CustomPrevArrow = styled.div`
  position: absolute;
  left: -35px;
  top: 50%;
  /* transform: translateY(-50%); */
  color: blue;
  font-size: 54px;
  cursor: pointer;
`;

export const CustomNextArrow = styled.div`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
  font-size: 54px;
  cursor: pointer;
`