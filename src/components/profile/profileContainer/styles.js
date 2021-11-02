import styled from 'styled-components';

export const Section = styled.section`
    width: 70%;  
`

export const Content = styled.div`
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    position: relative;
    margin-left: 60px;
    margin-top: 60px;

    @media (max-width: 430px) {
        width: 300px;
    } 
`
export const BackgroundContent = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    position: absolute;
    border-radius: 10px 10px 0px 0px;
`
