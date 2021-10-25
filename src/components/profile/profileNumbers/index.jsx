import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Container,
    NumberContainer,
    Qtde,
    Subtitle
} from "./styles";

const Numbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <Qtde>{props?.repos}</Qtde>
                <Subtitle>Repositórios</Subtitle>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/followers')}>
                <Qtde>{props?.followers}</Qtde>
                <Subtitle>Seguidores</Subtitle>
            </NumberContainer>

            <NumberContainer>
                <Qtde>{props?.following}</Qtde>
                <Subtitle>Seguindo</Subtitle>
            </NumberContainer>
        </Container>
    );
}

export default Numbers;