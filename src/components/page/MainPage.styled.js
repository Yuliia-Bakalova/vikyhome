import styled from 'styled-components';
import DEVICE from "../../constants/deviceSize";
export const Container =styled.div`
 text-align: center;
 background-color:  ${p => p.theme.colors.colorBg};
 padding: 0 10px;

@media ${DEVICE.laptop} {

}
  `;