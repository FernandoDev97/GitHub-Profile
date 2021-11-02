import {
    Container,
    Title,
    Description,
    Company,
    Localization,
    Blog
} from './styles'
import { FaLocationArrow } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { FaBloggerB } from "react-icons/fa"


const About = props => {
    return (
        <Container>
            <Title>Sobre</Title>
            {props?.bio ? 
            <Description>{props?.bio}</Description>
            : undefined }
            {props?.company ?
            <Company><MdWork size={15}/> {props?.company}</Company>
            : undefined}
            {props?.location ? 
            <Localization> <FaLocationArrow size={15}/> {props?.location}</Localization>
            : undefined}
            {props?.blog ? 
            <Blog><FaBloggerB size={15}/> {props?.blog}</Blog>
            : undefined} 
        </Container>
    )
}

export default About;