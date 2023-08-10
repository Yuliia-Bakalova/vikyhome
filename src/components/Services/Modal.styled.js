import styled from "styled-components";
import DEVICE from "./../../constants/deviceSize";

 export const Backdrop =styled.div`
 position: fixed;
 left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
 `;

export const ModalContainer =styled.div`
max-width: 800px;
max-height: 800px;
position: relative;
background-color:  ${p => p.theme.colors.colorPink};
overflow: auto;

`;
export const ModalBox =styled.div`
padding: 43px 20px 20px 20px;


@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  padding: 40px;
}

`;

export const CloseBtn = styled.button`
cursor: pointer;
  font-family: inherit;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  font-size: 23px;

  @media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  top: 20px;
  right: 20px;
}
`;

export const ModalDescription = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 14px;
display: flex;
justify-content: start;
text-align: start;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  font-size: 24px;
}
`;

export const ModalPrice = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 38px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  font-size: 38px;
}
`;

export const ModalPriceDesc = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 38px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  font-size: 38px;
}
`;


