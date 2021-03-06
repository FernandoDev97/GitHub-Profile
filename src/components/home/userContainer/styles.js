import styled from 'styled-components';

export const Section = styled.section`
    width: 60%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
`

export const Content = styled.div`
    width: 90%;
    height: 670px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    border-bottom: 10px solid #000000;
    margin-top: 15px;
    position: relative;

    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const BackgroundContent = styled.div`
    width: 100%;
    height: 135px;
    background-color: black;
    position: absolute;
    border-radius: 10px 10px 0px 0px;
`