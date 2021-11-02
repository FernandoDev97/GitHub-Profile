import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    @media (max-width: 830px) {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    } 
`