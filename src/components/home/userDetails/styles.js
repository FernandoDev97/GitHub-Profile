import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
`

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 2.0rem;
    font-weight: 700;
    color: #333;
    padding: 10px;
    margin: 0;
`

export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #222;
    margin: 0;
    padding: 10px;
    font-style: italic;
`
export const Localization = styled.p`
    font-size: 18px;
    font-style: italic;
    color: #222;
    padding: 10px;
`
export const Company = styled.p`
    font-size: 16px;
    font-style: italic;
    color: #222;
    padding: 10px;
`
export const Blog = styled.p`
    font-size: 16px;
    font-style: italic;
    color: #222;
    padding: 10px;
`

export const Description = styled.p`
    max-width: 500px;
    height: 100px; 
    margin: 10px 0;
    font-size: 18px;
    text-align: justify;
    color: #222;
    line-height: 1.5;
    overflow: hidden;

    @media (max-width: 700px) {
        width: 250px;
        height: 120px;
        font-size: 14px;
    } 
`