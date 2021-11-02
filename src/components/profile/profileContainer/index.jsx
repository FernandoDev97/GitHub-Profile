import {
    Content,
    Section,
    BackgroundContent
} from './styles';

const Profile = props => (
    <Section>
        <Content>
            <BackgroundContent/>
            {props.children}
        </Content>
    </Section>
);

export default Profile;