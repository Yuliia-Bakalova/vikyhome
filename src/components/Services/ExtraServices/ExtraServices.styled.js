import styled from 'styled-components';
import DEVICE from "../../../constants/deviceSize";

export const WrapBtn = styled.div`
margin-bottom: 50px;
background-color: transparent;
color: transparent;
border: none;

`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${p => p.theme.colors.colorPink};
  font-size: 30px;
`;

export const ModalDescription = styled.p`
  color: ${p => p.theme.colors.colorWhite};
  font-size: 15px;
  margin-right: 10px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 30px;
    margin-right: 20px;
  }
`;

export const ModalPrice = styled.p`
  color: ${p => p.theme.colors.titleMainColor};
  font-size: 18px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 30px;
    
  }
`;

export const ModalPriceDesc = styled.p`
  color: ${p => p.theme.colors.titleMainColor};
  font-size: 15px;
  margin-left: 5px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 28px;
    margin-left: 10px;
  }
`;

export const Backdrop = styled.div`
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

export const ModalContainer = styled.div`
  width: 300px;
 height: 840px;
  position: relative;
  background-color: ${p => p.theme.colors.colorPink};
  overflow: auto; 
  padding: 10px; 
  text-align: start;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
 width: 800px;
height: 800px;
 padding: 20px; 
  }
`;

export const ModalText = styled.div`
  margin-bottom: 20px;
  display: flex;

`;