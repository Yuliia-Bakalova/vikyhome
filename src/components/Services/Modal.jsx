import axios from "axios";
import { useEffect, useState } from "react";
import {
  ModalContainer,
  Backdrop,
  CloseBtn, 
  ModalDescription,
  ModalPrice,
  ModalPriceDesc,
  ModalBox,
} from "./Modal.styled";
import { GrClose } from "react-icons/gr";

const Modal = ({ serviceId, closeModal }) => {
  const [details, setDetails] = useState([]);


  useEffect(() => {
    getDetails()
  }, []);



  const getDetails = async () => {
    try {
      await axios
        .get(`http://3.74.246.7/api/v1/services/${serviceId}/`)
        .then((response) => setDetails(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Backdrop>
      <ModalContainer>
               
                   
              <CloseBtn onClick={closeModal}>
                <GrClose />
              </CloseBtn>
                <ModalBox>  
              <ModalDescription>{details.description} </ModalDescription>
              <ModalPrice> {details.price}</ModalPrice>
              <ModalPriceDesc> {details.price_description}</ModalPriceDesc>
            </ModalBox>
        
      
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;


