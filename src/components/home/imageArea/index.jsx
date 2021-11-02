import { 
    ImageContainer,
    Image,
    Description
} from "./styles";
import img from '../../../assets/img/menu.png'

const ImageArea = () => (
    <ImageContainer>
        <Image src={img}/>
        <Description>Site para você encontrar programadores, de uma forma rápida e prática!</Description>
    </ImageContainer>
);

export default ImageArea;