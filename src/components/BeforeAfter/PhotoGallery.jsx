import { Wrapper, Title, Box, Image,} from "../BeforeAfter/PhotoGallery.styled";
import after1 from "../../images/after1.jpeg";
import after2 from "../../images/after2.jpeg";
import after3 from "../../images/after3.jpg";
import after4 from "../../images/after4.jpg";
import after5 from "../../images/after5.jpeg";
import after6 from "../../images/after6.jpeg";
import after7 from "../../images/after7.jpeg";
import before1 from "../../images/before1.jpeg";
import before2 from "../../images/before2.jpeg";
import before3 from "../../images/before3.jpg";
import before4 from "../../images/before4.jpg";


const PhotoGallery = () => {

  return (
    <Wrapper>
      <Title>До   /   Після</Title>
      <Box>
 <Image src={before1} alt="before" />
 <Image src={after1} alt="after1" />
</Box>
<Box>
 <Image src={before2} alt="before" />
 <Image src={after2} alt="after2" />      
</Box>

<Box>
 <Image src={before3} alt="before" />
 <Image src={after3} alt="after" />      
</Box>

<Box>
 <Image src={before4} alt="before" />
 <Image src={after4} alt="after" />      
</Box>

<Box>
 <Image src={after6} alt="before" />
 <Image src={after7} alt="after2" />      
</Box>

<Box>
 
 <Image src={after5} alt="after2" />      
</Box>
    </Wrapper>
  );
};

export default PhotoGallery;