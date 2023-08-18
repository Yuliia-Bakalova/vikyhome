import {
  Container,
  TopBox,
  Title,
  ContactItem,
  ContactBox,
  ContactTitle,
  SocialBox,
  DevBox,
  DevTitle
} from "./Footer.styled";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <Container>
      <TopBox>
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

      </TopBox>
  


      <DevBox>
<DevTitle>
Developed by
</DevTitle>
<a
          href="https://www.linkedin.com/in/ihor-davydovskyi-98b137219/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#474444", fontSize: "23px", marginRight: "10px", marginLeft: "10px" }}
        >
          Shtierlits
        </a>
        <DevTitle>
        &
</DevTitle>
        <a
          href="www.linkedin.com/in/yuliia-bakalova-8375b5259"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#474444", fontSize: "23px", marginLeft: "10px" }}
        >
          Yulia Bakalova
        </a>
      </DevBox>
    </Container>
  );
};

export default Footer;
