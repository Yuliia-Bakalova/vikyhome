import axios from "axios";
import React, { useEffect, useState, useCallback  } from "react";
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

  const apiUrl = process.env.REACT_APP_URL_SECRET;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const getDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/services/${serviceId}/`);
      const data = response.data;
     
      data.description = data.description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
      setDetails(data);
    } catch (error) {
      console.error(error);
    }
  }, [serviceId]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseBtn onClick={closeModal}>
          <GrClose />
        </CloseBtn>
        <ModalBox>
          <ModalDescription>{details.description}</ModalDescription>
          <ModalPrice>{details.price}</ModalPrice>
          <ModalPriceDesc>{details.price_description}</ModalPriceDesc>
        </ModalBox>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
