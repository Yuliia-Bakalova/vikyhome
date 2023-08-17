import {
  Container,
  Title,
  ContactItem,
  ContactBox,
  ContactTitle,
  SocialBox
} from "./Footer.styled";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <Container>
      <Title> vikyhome</Title>

          <ContactBox>
        <ContactTitle> Контакти </ContactTitle>
        <ContactItem>
          <a
            href="tel:+380685073544"
            style={{ textDecoration: "none", color: "#000" }}
          >
            (068) 507-3544
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="mailto:vikatiurina@i.ua"
            style={{ textDecoration: "none", color: "#000" }}
          >
            vikatiurina@i.ua
          </a>
        </ContactItem>
      </ContactBox>

      <SocialBox>
      <ContactTitle> Приєднуйтесь </ContactTitle>
      <a
          href="https://www.instagram.com/vikyhome_kyiv/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "54px", color: "#62032b" }}
        >
          <BsInstagram style={{ marginRight: "25px" }} />
        </a>
        <a
          href="https://t.me/vikiyhome"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "63px", color: "#0227bd" }}
        >
          <LiaTelegramPlane />
        </a>

      </SocialBox>
    </Container>
  );
};

export default Footer;
