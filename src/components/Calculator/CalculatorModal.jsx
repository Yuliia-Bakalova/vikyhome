import React from "react";
import Calculator from "./Calculator";
import {
  CalcBox,
  CalcTitle,
  WrapBtn,
  Backdrop,
  CloseButton,
  Container,
} from "./CalculatorModal.styled";
import { GrClose } from "react-icons/gr";

const CalculatorModal = ({ closeModal }) => {
  return (
    <Backdrop>
      <Container>
        <WrapBtn>
          <CloseButton onClick={closeModal}>
            <GrClose />
          </CloseButton>
        </WrapBtn>

        <CalcBox>
          <CalcTitle>Калькулятор</CalcTitle>
          <Calculator />
        </CalcBox>
      </Container>
    </Backdrop>
  );
};

export default CalculatorModal;
