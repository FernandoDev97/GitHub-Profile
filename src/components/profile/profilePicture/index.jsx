import {
    Container,
    ProfilePicture
} from './styles';

const Picture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="/username" />
    </Container>
);

export default Picture;