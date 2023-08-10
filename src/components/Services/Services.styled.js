import styled from 'styled-components';
import DEVICE from "./../../constants/deviceSize";


export const Container =styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 300px;
margin-top: 50px;

@media ${DEVICE.tablet} {
  width: 768px;
}
@media ${DEVICE.laptop} {
  width: 1280px;
}
`;

 export const ServiceBox = styled.div`
 width: 230px;
 height: 230px;
border-radius: 10px;
 padding: 10px;
 margin-bottom: 20px;
 cursor: pointer;
 background-color:  ${p => p.theme.colors.colorPink};
 transition: background-color 0.3s;
 &:hover {
  box-shadow: 10px  20px 20px rgb(159, 14, 111);
 }

 @media ${DEVICE.tablet} {
  flex-basis: calc(50% - 25px);
  margin-right: 25px;
  margin-bottom: 25px;
}
@media ${DEVICE.laptop} {

 flex-basis: calc(25% - 20px);
    height: 290px;
    margin-right: 20px;
    margin-bottom: 20px; 

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;

}

 `;
export const ServiceImage = styled.img`
width: 150px;
height: 150px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  width: 180px;
 height: 180px;
}
  `;

export const ServiceText = styled.p`
color:  ${p => p.theme.colors.titleMainColor};
font-size: 15px;
font-weight: 700;
margin-top: 8px;
margin-bottom: 8px;
margin-right: 8px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  font-size: 22px;
  margin-top: 10px;
margin-bottom: 13px;
margin-right: 10px;
}

    `;

// export const CalculatorButton = styled.button`
// cursor: pointer;
//   font-family: inherit;
//   display: flex;
//   justify-content: center;
// align-items: center;
//   background-color:  ${p => p.theme.colors.colorPink};
//   margin-bottom: 40px;
//   margin-top: 40px;
//   width: 230px;
// height: 60px;
// border-radius: 10px;
//   border: none;

//   transition: background-color 0.4s;
//  &:hover {
//   box-shadow: 10px  20px 20px rgb(159, 14, 111);
//  }

//   @media ${DEVICE.tablet} {

// }
// @media ${DEVICE.laptop} {
//   width: 400px;
// }
// `;  
