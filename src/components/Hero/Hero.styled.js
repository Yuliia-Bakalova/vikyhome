import styled from "styled-components";
import DEVICE from "./../../constants/deviceSize";


export const Wrap = styled.div`
  position: relative;
  max-height: 950px;
  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
    10px 10px 10px rgba(86, 83, 83, 0.969),
    10px 10px 10px rgba(169, 162, 162, 0.2);
  background-color: ${(p) => p.theme.colors.colorPink};
  box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
    10px 10px 10px rgba(86, 83, 83, 0.969),
    10px 10px 10px rgba(169, 162, 162, 0.2);
  border-radius: 20px;
  /* display: flex;
  justify-content: space-around; */
  padding: 10px;

  @media ${DEVICE.tablet} {
    display: block;
    padding: 20px;
  }
  @media ${DEVICE.laptop} {
    display: flex;
    justify-content: space-around;
    padding: 30px;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 300px;

  @media ${DEVICE.tablet} {
    max-width: 300px;
    max-height: 400px;
  }
  @media ${DEVICE.laptop} {
    max-width: 500px;
    max-height: 600px;
  }
`;

export const ImageSec = styled.img`
/* display: none; */
  max-width: 100px;
  max-height: 200px;
  margin-left: -40px;

  @media ${DEVICE.tablet} {
    max-width: 200px;
    max-height: 300px;
    margin-left: -30px;
  }
  @media ${DEVICE.laptop} {
    max-width: 400px;
    max-height: 420px;
    margin-left: -50px;
  }
`;

export const WrapTitle = styled.div`
  @media ${DEVICE.tablet} {
    margin-bottom: 20px;
  }
  @media ${DEVICE.laptop} {
    padding: 100px 60px;
  }
`;

export const WrapBox = styled.div`
  /* margin-left: 30px; */
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.titleMainColor};

  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'Harrington'; */
  text-shadow: #671629 4px 4px 3px;
    font-size: 38px;
    margin-top: 10px;
 
  @media ${DEVICE.tablet} {
    font-size: 98px;
    margin-top: 28px;
  }
  @media ${DEVICE.laptop} {
    font-size: 100px;
    margin-top: 100px;
  }
`;

export const TitleDesc = styled.h2`
  color: ${(p) => p.theme.colors.titleMainColor};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;

  @media ${DEVICE.tablet} {
    font-size: 28px;
    margin-bottom: 10px;
  }
  @media ${DEVICE.laptop} {
    font-size: 38px;
  }
`;
