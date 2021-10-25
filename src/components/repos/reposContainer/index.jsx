import { useHistory } from 'react-router-dom';
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoName,
    RepoDescription,
} from './styles';

const ReposContainer = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo key={repo?.id}>
                        <RepoName>{repo?.name}</RepoName>
                        <RepoDescription>{repo?.description}</RepoDescription>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
        
    );
}

export default ReposContainer;