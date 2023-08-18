import styled from 'styled-components';
import DEVICE from "./../../constants/deviceSize";

export const Container =styled.div`
color: ${p => p.theme.colors.colorTextSecond};
background-color:  ${p => p.theme.colors.colorPink};
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 20px 20px 0px 0px;
padding-left: 50px;
padding-right: 50px;
padding-top: 10px;
margin-right:auto;
margin-left:auto;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  padding-left: 50px;
padding-right: 80px;
margin-right:auto;
margin-left:auto;
/* display: flex;
justify-content:space-between; */

}

`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.titleMainColor};
 text-shadow: #671629 1px 1px 1px;

 @media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
 font-size: 60px;
 text-shadow: #671629 2px 2px 1px;
}

`;
export const ContactItem =styled.li`
color: ${p => p.theme.colors.colorWhite};
text-decoration: none;
font-size: 24px;
margin-top: 5px;
@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
 font-size: 24px;

}

`;
export const ContactBox =styled.div`
display: block;
margin-top: 20px;
padding-bottom: 20px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: block;
margin-bottom: 20px;
margin-top: 20px;
}
`;


export const ContactTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 10px;
 color: ${p => p.theme.colors.titleMainColor};
 

 @media ${DEVICE.tablet} {
  text-shadow: #671629 2px 2px 1px;
}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
 font-size: 30px;
 text-shadow: #671629 2px 2px 1px;
}
`;

export const SocialBox =styled.div`
display: block;
margin-top: 20px;
padding-bottom: 20px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: block;
margin-bottom: 20px;
margin-top: 20px;
}
`;

export const DevBox =styled.div`
display: block;
margin-top: 20px;
padding-bottom: 20px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
margin-bottom: 20px;

}
`;

export const DevTitle = styled.h2`

 color: ${p => p.theme.colors.devColor};
 font-size: 20px;

 @media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {

  
 font-size: 20px;

}
`;

export const TopBox =styled.div`
display: block;
margin-top: 20px;
padding-bottom: 20px;

@media ${DEVICE.tablet} {

}
@media ${DEVICE.laptop} {
  display: flex;
  justify-content: space-between;
margin-bottom: 20px;
margin-top: 20px;
}
`;