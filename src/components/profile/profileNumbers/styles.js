import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 120px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`

export const NumberContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    cursor: pointer;

    &:hover {
        background: rgba(0,0,0,.1);
        transition: .2s ease;
        border-radius: 2px;
    }
`

export const Qtde = styled.h1`
    font-size: 20px;
    color: #222;
    margin: 0;
    text-align: justify;
`     

export const Subtitle = styled.h2`    
    font-size: 16px;
    color: #222;
    margin: 0;
`

