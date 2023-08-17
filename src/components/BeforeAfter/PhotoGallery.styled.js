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
`;

export const Title = styled.h1`
 color: ${p => p.theme.colors.titleMainColor};
 display: flex;
  align-items: center;
  justify-content: center;
  font-size: 37px;

@media ${DEVICE.tablet} {
  font-size: 60px;
}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 65px;
  margin-bottom: 35px;
}
`;

export const Box =styled.div`

          margin-bottom: 20px;
        
`;

export const Image = styled.img`
  max-width: 100px;
   max-height: 100px;

   margin-right: 30px;
   @media ${DEVICE.tablet} {
    max-width: 320px;
   max-height: 300px;
   margin-right: 30px;
}
@media ${DEVICE.laptop} {
  max-width: 500px;
   max-height: 800px;
   margin-right: 30px;
}

`;

export const WrapSlider =styled.div`
padding: 20px;
display: flex; 
justify-content: center;
`;