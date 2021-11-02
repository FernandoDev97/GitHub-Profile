import {
    Container,
    Name,
    Username,
} from './styles';

const Details = props => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Username>@{props?.login}</Username>
        </Container>
    );
}

export default Details;