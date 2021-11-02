import React from "react";

import {
    Section,
    Title,
    ListFollowersContainer,
    BoxFollow,
    Picture,
    Name,
} from './styles'

const FollowersContainer = props => {

    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListFollowersContainer>
                {(props?.followers).map(follow => (
                <BoxFollow onClick={() => window.open(follow?.html_url)} key={follow?.id}>
                    <Picture src={follow?.avatar_url} alt="/username"/>
                    <Name>@{follow?.login}</Name>
                </BoxFollow>
                ))}
            </ListFollowersContainer>
        </Section>
        
    );
}

export default FollowersContainer;