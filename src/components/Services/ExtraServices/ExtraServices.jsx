import axios from "axios";
import { useEffect, useState, useCallback  } from "react";
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

    const apiUrl = process.env.REACT_APP_URL_SECRET;

    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
 
    const getServices = useCallback(async () => {
      try {
        const extraResponse = await axios.get(`${apiUrl}/api/v1/extra/`);
        setDataExtra(extraResponse.data);
      } catch (error) {
        console.error(error);
      }
    }, [apiUrl]);
  
    useEffect(() => {
      getServices();
    }, [getServices]);
  
 
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

