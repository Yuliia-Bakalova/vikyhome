import {
  Container,
  Title,
  ContactItem,
  ContactBox,
  ContactTitle,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Title> VikyHome</Title>

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
            {" "}
            vikatiurina@i.ua
          </a>
        </ContactItem>
      </ContactBox>
    </Container>
  );
};

export default Footer;
