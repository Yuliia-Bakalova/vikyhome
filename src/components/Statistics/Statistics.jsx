import { Wrapper, Title, Box, Icon } from "../Statistics/Statistics.styled";
import { GiConfirmed } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const Statist = () => {
  return (
    <Wrapper>
      <Box>
        <Icon>
                  <GiConfirmed />
        </Icon>

        <Title> 3 роки на ринку </Title>
      </Box>

      <Box>
        <Icon>
          <BiSolidBuildingHouse />
        </Icon>
        <Title> Більше 3500 прибраних квартир </Title>
      </Box>

      <Box>
        <Icon>
                <ImLocation />
        </Icon>
        <Title> Працюємо по Києву та області </Title>
      </Box>
    </Wrapper>
  );
};

export default Statist;
