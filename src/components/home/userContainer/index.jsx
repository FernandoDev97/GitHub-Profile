import {
    Content,
    Section
} from './styles';

const UserContainer = props => (
    <Section>
        <Content>
            {props.children}
        </Content>
    </Section>
);

export default UserContainer;