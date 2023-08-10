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

@media ${DEVICE.mobile} {
margin-right:auto;
margin-left:auto;
}

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  padding-left: 50px;
padding-right: 50px;
margin-right:auto;
margin-left:auto;

font-size: 16px;
font-weight:700;
}
`;

export const Title = styled.h1`
 font-family: cursive;
 color: ${p => p.theme.colors.titleMainColor};
  font-size: 20px;
  margin-bottom: 20px;

@media ${DEVICE.tablet} {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 20px;
 
}
`;

export const ContactItem =styled.li`
color: ${p => p.theme.colors.titleMainColor};
text-decoration: none;
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