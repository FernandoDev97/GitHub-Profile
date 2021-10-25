import styled from 'styled-components';

export const MainSection = styled.main`
    width: 100%;
    height: 130px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    
`

export const MainTitle = styled.p`
    margin: 0;
    padding: 0;
    color: #E5E5E5;
    font-size: 20px;
    width: 100%;
    text-align: center;
`

export const MainInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 50px;
        height: 37px;
        border-radius: 20px;
        border: none;
        background: #FF7A00;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        transition: ease .3s;

        &:hover {
            transform: scale(1.05);
            transition: ease .3s;
            cursor: pointer;
        }
    }
`

export const MainInput = styled.input`
    width: 250px;
    height: 35px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    font-size: 18px;

    &:focus {
        outline: none;
        width: 300px;
        transition: .4s ease;
    }
`
