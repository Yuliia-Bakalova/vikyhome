import styled from 'styled-components';
import DEVICE from "./../../constants/deviceSize";

export const Wrap =styled.div`
position: relative;
max-height: 950px;
margin-top: 20px;
margin-bottom: 20px;

box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
background-color:  ${p => p.theme.colors.colorPink};
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 20px;
`;

export const SlideImage = styled.img`
padding: 20px;
margin: 0 auto;

  max-width: 300px;
max-height: 200px;
padding: 20px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  max-width: 900px;
max-height: 700px;

}
`;

export const WrapSlider =styled.div`
padding: 20px;
display: flex; 
justify-content: center;
`;

export const Dot = styled.li`
  margin: 0 5px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
    width:30px;
  height: 30px;

@media ${DEVICE.tablet} {
  width: 35px;
  height: 35px;
}
@media ${DEVICE.laptop} {
  width: 55px;
  height: 55px;
}
`;


export const Title = styled.h2`
color: ${p => p.theme.colors.titleMainColor};

display: flex;
justify-content: center;
align-items: center;
font-family: 'Harrington';
text-shadow: #671629 4px 4px 3px;
 

 @media ${DEVICE.mobile} {
  font-size: 38px;
}
@media ${DEVICE.tablet} {
  
}
@media ${DEVICE.laptop} {
  font-size: 98px;
 
}
`;
