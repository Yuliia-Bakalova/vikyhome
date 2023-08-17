import styled from "styled-components";
import DEVICE from "../../constants/deviceSize";

export const CalcContainer = styled.div`
  padding: 10px 10px 40px 10px;
`;

export const CalculatorTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 30px;
  }
`;
export const CalculatorTotal = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 30px;
  }
`;

export const CalcList = styled.ul``;

export const Item = styled.li`
  font-size: 15px;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  text-align: start;
  color: ${(p) => p.theme.colors.titleMainColor};

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    text-align: center;
  }
`;
export const BtnChange = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 7px;
  font-size: 10px;
  color: ${(p) => p.theme.colors.titleMainColor};
  border: 2px solid green;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.colorPink};
  cursor: pointer;

  &:disabled {
   
    border-color: #cccccc80;
    cursor: not-allowed;
  }

  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    width: 90px;
    height: 30px;
    margin-left: 15px;
    font-size: 18px;
    border: 2px solid green;
  }
`;
export const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  font-size: 15px;
  color: ${(p) => p.theme.colors.titleMainColor};
  border: 2px solid #a20000bf;
  background-color: ${(p) => p.theme.colors.colorPink};
  border-radius: 30px;
  margin-left: 7px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${DEVICE.tablet} {
    width: 24px;
    height: 24px;
  }
  @media ${DEVICE.laptop} {
    width: 34px;
    height: 34px;
    margin-left: 15px;
    font-size: 18px;
    border: 2px solid #a20000bf;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 60px;
  max-height: 30px;
  font-size: 15px;
  margin-left: 15px;
  color: ${(p) => p.theme.colors.titleMainColor};
  border: 2px solid #ffa5008a;
  background-color: ${(p) => p.theme.colors.colorPink};
  border-radius: 30px;
  padding: 7px 7px 7px 10px;


  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    font-size: 18px;
    border: 2px solid #ffa5008a;
    padding: 7px;
  }

`;


