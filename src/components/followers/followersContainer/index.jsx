import React from "react";
import { useHistory } from "react-router";

import {
    Section,
    Title,
    ListFollowersContainer,
    BoxFollow,
    Picture,
    Name,
} from './styles'

const FollowersContainer = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListFollowersContainer>
                {(props?.followers).map(follow => (
                <BoxFollow key={follow?.id}>
                    <Picture src={follow?.avatar_url} alt="/username"/>
                    <Name>{follow?.login}</Name>
                </BoxFollow>
                ))}
            </ListFollowersContainer>
        </Section>
        
    );
}

export default FollowersContainer;