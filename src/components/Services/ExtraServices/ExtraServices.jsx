import axios from "axios";
import { useEffect, useState } from "react";
import {
  WrapBtn,
  ModalText,
  CloseButton,
  ModalDescription,
  ModalPrice,
   ModalPriceDesc,
  ModalContainer,
  Backdrop,
} from "./ExtraServices.styled";
import { GrClose } from "react-icons/gr";


const ExtraServices = ({ type, closeModal }) => {
    const [dataExtra, setDataExtra] = useState([]);


    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
 
  const getServices = async() => {
  try{
    const extraResponse = await axios.get(
        "http://3.74.246.7/api/v1/extra/"
      );
      setDataExtra(extraResponse.data);
    } catch (error) {
      console.error(error);
    }
  }
  

  
  useEffect(() => {
    getServices();
  }, []);
  
 
    return (
     
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <WrapBtn>
      <CloseButton onClick={closeModal}>
    <GrClose />
  </CloseButton>
  </WrapBtn>
  {dataExtra.map((extra, index) => (
  <ModalText key={`extra-${index}`}>
    <ModalDescription>{extra.title} : </ModalDescription>
    <ModalPrice>{extra.price}</ModalPrice>
    <ModalPriceDesc>{extra.price_description}</ModalPriceDesc>
  </ModalText>
))}
  
        </ModalContainer>
    </Backdrop>
     

    );
  };
  
  export default ExtraServices;

