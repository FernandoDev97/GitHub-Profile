import {
    Content,
    Section
} from './styles';

const Profile = props => (
    <Section>
        <Content>
            {props.children}
        </Content>
    </Section>
);

export default Profile;