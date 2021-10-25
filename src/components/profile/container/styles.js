import styled from 'styled-components';

export const Section = styled.section`
    width: 22%;
    height: 70vh;   
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-left: 18%;

    @media (max-width: 430px) {
        width: 300px;
    } 
`