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
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick}>
      <Container>
        <WrapBtn>
          <CloseButton onClick={closeModal}>
            <GrClose />
          </CloseButton>
        </WrapBtn>

        <CalcBox>
          <CalcTitle>Розрахувати вартість</CalcTitle>
          <Calculator />
        </CalcBox>
      </Container>
    </Backdrop>
  );
};

export default CalculatorModal;
