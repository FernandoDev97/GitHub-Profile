import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;   
`

export const NumberContainer = styled.div`
    width: 130px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.1);
        transition: .2s ease;
        border-radius: 10px;
    }
`

export const Qtde = styled.h1`
    font-size: 20px;
    text-align: center;
    font-size: 1.8rem;
    color: #000000;
    margin: 0;
`     

export const Subtitle = styled.h2`    
    font-size: 16px;
    text-align: center;
    color: #333;
    margin: 0;
`

