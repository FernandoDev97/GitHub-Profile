import {
    Container,
    Name,
    Username,
    Description,
    Localization,
    Company,
    Blog
} from './styles';
import { FaLocationArrow } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { FaBloggerB } from "react-icons/fa"


const Details = props => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Username>{props?.login}</Username>
            {props?.location ? 
            <Localization> <FaLocationArrow size={15}/> {props?.location}</Localization>
            : undefined}
            {props?.company ?
            <Company><MdWork size={15}/> {props?.company}</Company>
            : undefined}
            {props?.blog ? 
            <Blog><FaBloggerB size={15}/> {props?.blog}</Blog>
            : undefined}
            <Description>{props?.bio}</Description>
        </Container>
    );
}

export default Details;