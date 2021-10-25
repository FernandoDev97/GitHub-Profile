import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    } 
`