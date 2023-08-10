import styled from 'styled-components';
import DEVICE from "../../constants/deviceSize";

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

export const CalculatorButton = styled.button`
cursor: pointer;
  font-family: inherit;
  display: flex;
  justify-content: center;
align-items: center;
  background-color:  ${p => p.theme.colors.colorPink};
  margin-bottom: 40px;
  margin-top: 40px;
  width: 230px;
height: 60px;
border-radius: 10px;
  border: none;

  transition: background-color 0.4s;
 &:hover {
  box-shadow: 10px  20px 20px rgb(159, 14, 111);
 }

  @media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  width: 400px;
}
`;  

export const BtnWrap =styled.div`
display: flex;
justify-content: center;
`;
