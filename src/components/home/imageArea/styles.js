import styled from "styled-components";

export const ImageContainer = styled.div`
    background-color: #000;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        width: 50%;
    } 

    @media (max-width: 830px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    } 
`
export const Image = styled.img`
    width: 70%;

    @media (max-width: 830px) {
        width: 50%;
        margin-top: 20px;
      } 
`  
export const Description = styled.h1`
    font-style: normal;
    width: 70%;
    font-weight: 200;
    font-size: 2.0rem;
    text-align: center;
    color: #fff;
    margin-top: 80px;
    
    @media (max-width: 1440px) {
        font-size: 1.8rem;
        width: 80%;
    } 

    @media (max-width: 1200px) {
        font-size: 1.6rem;
        width: 80%;
    } 

    @media (max-width: 830px) {
        width: 80%;
        font-size: 1.4rem;
        margin-top: 20px;
    } 

    @media (max-width: 470px) {
        width: 90%;
        font-size: 1.2rem;
        margin-top: 20px;
    } 

    @media (max-width: 395px) {
        width: 90%;
        font-size: 1.0rem;
        margin-top: 20px;
    } 
`