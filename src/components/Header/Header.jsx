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
    <Container>
      <Title> Затишок Вашого дому</Title>

      <ContactBox>
        <ContactItem>
          <GiSmartphone />
          <a
            href="tel:+380685073544"
            style={{ textDecoration: "none", color: "#000" }}
          >
            (068) 507-3544
          </a>
        </ContactItem>
        <ContactItem>
          <IoMailOutline />
          <a
            href="mailto:vikatiurina@i.ua"
            style={{ textDecoration: "none", color: "#000" }}
          >
            {" "}
            vikatiurina@i.ua
          </a>
        </ContactItem>
      </ContactBox>
    </Container>
  );
};

export default Header;
