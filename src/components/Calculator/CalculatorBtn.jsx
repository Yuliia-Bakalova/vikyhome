import React from "react";
import {  useState } from "react";
import CalculatorModal from "./CalculatorModal";
import { CalculatorButton, ServiceText, BtnWrap } from "./CalculatorBtn.styled";
import { BsFillCalculatorFill } from "react-icons/bs";

const CalculateButton = ({ onClick }) => {
    const [isCalculatorModalOpen, setCalculatorModalOpen] = useState(false);

    const openCalculatorModal = () => {
        setCalculatorModalOpen(true);
      };
      
      const closeCalculatorModal = () => {
        setCalculatorModalOpen(false);
      };


  return (
    <BtnWrap>
    <CalculatorButton onClick={openCalculatorModal}>
    <ServiceText> Розрахувати вартість </ServiceText>
   <BsFillCalculatorFill fontSize={27} />  

     </CalculatorButton>

    {isCalculatorModalOpen && (
       <CalculatorModal closeModal={closeCalculatorModal} />
     )}
     </BtnWrap>
  );
};

export default CalculateButton;