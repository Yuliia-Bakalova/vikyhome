import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  ServiceBox,
  ServiceImage,
  ServiceText,
  // CalculatorButton,
} from "./Services.styled";
import Modal from "./Modal";
// import CalculatorModal from "../Calculator/CalculatorModal";
import ExtraServices from "./ExtraServices/ExtraServices";
import image from "../../images/vacuum-cleaner.png";
// import { BsFillCalculatorFill } from "react-icons/bs";


const Services = () => {
  const [data, setData] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  // const [isCalculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [isOpenExtra, setOpenExtra] = useState(false);



  useEffect(() => {
   
  getServices()
  }, []);




const getServices = async() => {
try{
   await axios.get("http://3.74.246.7/api/v1/services/").then(response => setData(response.data));
  
}
catch(error){console.error(error)}
}



const openModal = (id) => {
  setSelectedServiceId(id);
};

const closeModal = () => {
  setSelectedServiceId(null);
};


// const openCalculatorModal = () => {
//   setCalculatorModalOpen(true);
// };

// const closeCalculatorModal = () => {
//   setCalculatorModalOpen(false);
// };

const openExtra = () => {
  setOpenExtra(true);
};
const closeExtra = () => {
  setOpenExtra(false);
};


  return (
    <Container>

      {data.map(item => {return  <ServiceBox key={item.id} onClick={() => openModal(item.id)}>
        <ServiceImage src={item.image} alt={item.title} />
        <ServiceText>{item.title} </ServiceText>
      </ServiceBox>})}

      {selectedServiceId && (
        <Modal
          serviceId={selectedServiceId}
          closeModal={closeModal}
        />
      )}

       

       <ServiceBox onClick={openExtra}>
       <ServiceImage src={image} alt="пилосос"/>
       <ServiceText>Додаткові послуги </ServiceText>
       
       </ServiceBox>
      
       {isOpenExtra && (
        <ExtraServices closeModal={closeExtra} />
      )}
      

     {/* <CalculatorButton onClick={openCalculatorModal}>
     <ServiceText> Розрахувати вартість </ServiceText>
    <BsFillCalculatorFill fontSize={27} />  
      </CalculatorButton>
     {isCalculatorModalOpen && (
        <CalculatorModal closeModal={closeCalculatorModal} />
      )} */}
    </Container>
  );
};

export default Services;


