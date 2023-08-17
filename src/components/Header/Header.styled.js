import styled from 'styled-components';
import DEVICE from "./../../constants/deviceSize";



export const Container =styled.div`
background-color:  ${p => p.theme.colors.colorPink};
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 0px 0px 20px 20px;
display:flex;
align-items: center;
justify-content: space-between;
padding: 20px;
margin-right:auto;
margin-left:auto;


@media ${DEVICE.tablet} {
  padding: 20px 30px;
}
@media ${DEVICE.laptop} {
  padding-left: 50px;
padding-right: 50px;
margin-right:auto;
margin-left:auto;

font-size: 16px;
font-weight:700;
padding: 20px 50px;
}
`;

export const Title = styled.h1`
 font-family: cursive;
 color: ${p => p.theme.colors.titleMainColor};
  font-size: 25px;
  margin-bottom: 20px;

@media ${DEVICE.tablet} {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 20px;
}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 20px;
 
 
}
`;

export const ContactItem =styled.li`
color: ${p => p.theme.colors.titleMainColor};
text-decoration: none;
display: flex;
align-items: center;

 @media ${DEVICE.mobile} {
  font-size: 15px;
 }
 @media ${DEVICE.tablet} {
  font-size: 24px;
}
@media ${DEVICE.laptop} {
  font-size: 24px;
 }

`;

export const ContactBox =styled.div`
  @media ${DEVICE.mobile} {
    display: block;
}
@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: block;
}

`;

export const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;