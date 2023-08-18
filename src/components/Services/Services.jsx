import axios from "axios";
import { useEffect, useState } from "react";
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



  useEffect(() => {  
  getServices()
  }, []);




// const getServices = async() => {
// try{
//    await axios.get("http://3.74.246.7/api/v1/services/").then(response => setData(response.data));
  
// }
// catch(error){console.error(error)}
// }
const getServices = async () => {
  try {
    const response = await axios.get("http://3.74.246.7/api/v1/services/");
    const sortedData = response.data.sort((a, b) => a.id - b.id); // Сортування за зростанням id
    setData(sortedData);
  } catch (error) {
    console.error(error);
  }
};


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
    // <Container>

    //   {data.map(item => {return  <ServiceBox key={item.id} onClick={() => openModal(item.id)}>
    //     <ServiceImage src={item.image} alt={item.title} />
    //     <ServiceText>{item.title} </ServiceText>
    //   </ServiceBox>})}

    //   {selectedServiceId && (
    //     <Modal
    //       serviceId={selectedServiceId}
    //       closeModal={closeModal}
    //     />
    //   )}

       

    //    <ServiceBox onClick={openExtra}>
    //    <ServiceImage src={image} alt="пилосос"/>
    //    <ServiceText>Додаткові послуги </ServiceText>
       
    //    </ServiceBox>
      
    //    {isOpenExtra && (
    //     <ExtraServices closeModal={closeExtra} />
    //   )}
      


    // </Container>
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


