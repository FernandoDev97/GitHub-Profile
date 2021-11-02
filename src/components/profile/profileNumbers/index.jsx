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
                <Subtitle>Repositórios</Subtitle>
                <Qtde>{props?.repos}</Qtde>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/followers')}>
                <Subtitle>Seguidores</Subtitle>
                <Qtde>{props?.followers}</Qtde>
            </NumberContainer>

            <NumberContainer>
                <Subtitle>Seguindo</Subtitle>
                <Qtde>{props?.following}</Qtde>
            </NumberContainer>
        </Container>
    );
}

export default Numbers;