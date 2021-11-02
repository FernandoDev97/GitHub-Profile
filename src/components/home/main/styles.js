import styled from 'styled-components';

export const MainSection = styled.main`
    width: 40%;
    height: 600px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    background-color: #ffffff;
    
    @media (max-width: 1200px) {
        width: 50%;
    } 

    @media (max-width: 830px) {
        width: 100%;  
        justify-content: center;
        align-items: center;
    } 
`

export const Image = styled.img`
    width: 200px;
    margin-left: 150px;

    @media (max-width: 1440px) {
        margin-left: 50px;
    } 

    @media (max-width: 1200px) {
        width: 160px;
        margin-left: 50px;
    } 

    @media (max-width: 830px) {
        width: 180px;
        margin-top: 30px;
        margin-left: 0px;
    } 

    @media (max-width: 395px) {
        width: 150px;
        margin-top: 20px;
        margin-left: 0px;
    } 


`  
export const MainTitle = styled.h3`
    width: 200px;
    height: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    margin-left: 150px;
    margin-top: 150px;

    @media (max-width: 1440px) {
        margin-left: 50px;
    } 

    @media (max-width: 1200px) {
        width: 180px;
        margin-left: 50px;
        font-size: 20px;
    } 

    @media (max-width: 830px) {
        width: 220px;
        font-size: 24px;
        margin-top: 100px;
        margin-left: 0px;
        text-align: center;
    } 

    @media (max-width: 395px) {
        width: 180px;
        font-size: 20px;
        margin-top: 100px;
        margin-left: 0px;
        text-align: center;
    } 

`
export const Subtitle = styled.p`
    width: 100%;
    height: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #7E7E7E;
    margin-top: 20px;
    margin-left: 150px;

    @media (max-width: 1440px) {
        margin-left: 50px;
    } 

    @media (max-width: 1200px) {
        margin-left: 50px;
        font-size: 14px;
    } 

    @media (max-width: 830px) {
        font-size: 14px;
        text-align: center;
        margin-left: 0px;
    } 
    
    @media (max-width: 395px) {
        width: 200px;
        font-size: 14px;
        text-align: center;
        margin-left: 0px;
        margin-bottom: 15px;
    } 

`
export const MainInputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-left: 150px; 

    @media (max-width: 1440px) {
        margin-left: 50px;
    } 

    @media (max-width: 1200px) {
        margin-left: 50px;
    } 

    @media (max-width: 830px) {
        margin-left: 0px;
    } 

`
export const MainInput = styled.input`
    width: 420px;
    height: 58px;
    border: 1px solid #999;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 20px;
    font-size: 1.2rem;
    padding: 15px;

    &:focus {
        outline: none;
        border: 2px solid #222;
        transition: .3s ease;
    }
    
    @media (max-width: 1200px) {
        width: 360px;
        font-size: 1.0rem;
    } 

    @media (max-width: 830px) {
        width: 460px;
        font-size: 1.0rem;
    } 

    @media (max-width: 470px) {
        width: 390px;
        font-size: 1.0rem;
    } 

    @media (max-width: 395px) {
        width: 300px;
        font-size: 0.9rem;
    } 

`
export const Button = styled.button`
    width: 420px;
    height: 56px;
    border-radius: 100px;
    border: none;
    background: #000000;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;
    font-size: 20px;

    &:hover {
        transform: scale(1.05);
        transition: ease .1s;
        cursor: pointer;
        font-size: 22px;
    }
    
    @media (max-width: 1200px) {
        width: 360px;
        font-size: 18px;
    }

    @media (max-width: 830px) {
        width: 400px;
        font-size: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 470px) {
        width: 320px;
        font-size: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 395px) {
        width: 230px;
        font-size: 16px;
        margin-bottom: 20px;
    }
` 
