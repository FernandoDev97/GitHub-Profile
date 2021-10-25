import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 15%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 11%;
`

export const NumberContainer = styled.div`
    width: 25%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.3);
        transition: .2s ease;
        border-radius: 10px;
    }
`

export const Qtde = styled.h1`
    text-align: center;
    font-size: 1.6rem;
    color: #E5E5E5;
    margin: 0;
`     


export const Subtitle = styled.h2`    
    font-size: 14px;
    text-align: center;
    color: #999;
    margin: 0;
`

