import {
  Container,
  Title,
  ContactItem,
  ContactBox,
 
} from "../Header/Header.styled";
import { GiSmartphone } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";


const Header = () => {
  return (
    <Container >
      <Title> Затишок Вашого дому</Title>

      <ContactBox>
        <ContactItem>
       
          <a
            href="tel:+380685073544"
            style={{ textDecoration: "none", color: "#000",  display: "flex",
            alignItems: "center", marginBottom: "10px",  }}
          >
            <GiSmartphone style={{ marginRight: "15px", fontSize: "30px"   }} />
            (068) 507-3544
          </a>
        </ContactItem>
        <ContactItem>
       
          <a
            href="mailto:vikatiurina@i.ua"
            style={{ textDecoration: "none", color: "#000",  display: "flex",
            alignItems: "center", }}
          >
           <IoMailOutline style={{ marginRight: "10px", fontSize: "30px" }} />
            vikatiurina@i.ua
          </a>
        </ContactItem>
      </ContactBox>

   
    </Container>
  );
};

export default Header;
