import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoName,
    RepoDescription,
} from './styles';

const ReposContainer = props => {

    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.open(repo?.html_url)} key={repo?.id}>
                        <RepoName>{repo?.name}</RepoName>
                        <RepoDescription>{repo?.description}</RepoDescription>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
        
    );
}

export default ReposContainer;