import {
    Content,
    Section,
    BackgroundContent
} from './styles';

const UserContainer = props => (
    <Section>
        <Content>
            <BackgroundContent/>
            {props.children}
        </Content>
    </Section>
);

export default UserContainer;