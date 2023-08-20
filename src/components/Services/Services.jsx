import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import {
  Container,
  ServiceBox,
  ServiceImage,
  ServiceText,
} from "./Services.styled";
import Modal from "./Modal";
import ExtraServices from "./ExtraServices/ExtraServices";
import image from "../../images/vacuum-cleaner.png";


const Services = () => {
  const [data, setData] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isOpenExtra, setOpenExtra] = useState(false);

  const apiUrl = process.env.REACT_APP_URL_SECRET;

  const getServices = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/services/`);
      const sortedData = response.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);
  
  useEffect(() => {
    getServices();  
  }, [apiUrl, getServices]);




const openModal = (id) => {
  setSelectedServiceId(id);
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  setSelectedServiceId(null);
  document.body.style.overflow = "auto"; 
};




const openExtra = () => {
  setOpenExtra(true);
  document.body.style.overflow = "hidden";
};
const closeExtra = () => {
  setOpenExtra(false);
  document.body.style.overflow = "auto"; 
};


  return (
    <Container>
    {data.map((item) => (
      <ServiceBox key={item.id} onClick={() => openModal(item.id)}>
        <ServiceImage src={item.image} alt={item.title} />
        <ServiceText>{item.title}</ServiceText>
      </ServiceBox>
    ))}

    {selectedServiceId && (
      <Modal serviceId={selectedServiceId} closeModal={closeModal} />
    )}

    <ServiceBox onClick={openExtra}>
      <ServiceImage src={image} alt="пилосос" />
      <ServiceText>Додаткові послуги</ServiceText>
    </ServiceBox>

    {isOpenExtra && <ExtraServices closeModal={closeExtra} />}
  </Container>
  );
};

export default Services;


