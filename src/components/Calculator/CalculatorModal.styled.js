import styled from "styled-components";
import DEVICE from "../../constants/deviceSize";

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

export const Container = styled.div`
  max-width: 1000px;
  max-height: 800px;
  background-color: ${(p) => p.theme.colors.colorPink};
  overflow: auto;
  position: relative;

  padding: 10px;
`;

export const CalcBox = styled.div``;

export const CalcTitle = styled.h2`
  color: ${(p) => p.theme.colors.titleMainColor};
  font-size: 30px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 40px;
  }
`;

export const WrapBtn = styled.div`
  margin-bottom: 40px;
  background-color: transparent;
  color: transparent;
  border: none;

  @media ${DEVICE.tablet} {
  }

  @media ${DEVICE.laptop} {
    margin-bottom: 50px;
  }
`;

export const CloseButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 30px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    top: 30px;
    right: 30px;
  }
`;
