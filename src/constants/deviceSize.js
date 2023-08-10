const SIZE = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1280px',
  };
  const DEVICE = {
    mobile: `screen and (min-width: ${SIZE.mobile})`,
    tablet: `screen and (min-width: ${SIZE.tablet})`,
    laptop: `screen and (min-width: ${SIZE.laptop})`,
  };
  export default DEVICE;


//   @media ${DEVICE.mobile} {

// }
// @media ${DEVICE.tablet} {

// }
// @media ${DEVICE.laptop} {

// }

// import DEVICE from "./../../constants/deviceSize";