import styled from 'styled-components';

export const Section = styled.section`
    width: 65%;
    height: 70vh;
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;

    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
    color: #E5E5E5;
    width: 100%;
    text-align: center;
    height: 40px;
`

export const ListFollowersContainer = styled.div`
    height: 90%;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`
export const BoxFollow = styled.div`
    width: 100%;
    height: 100px;
    background: rgba(0,0,0,.4);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all ease 0.2s;
    display: flex;
    align-items: center;

    &:hover {
        background-color:rgba(0,0,0,.3);
    }
`
export const Picture = styled.img`
    width: 80px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid #700B97;
`
export const Name = styled.h1 `
    font-size: 1.6rem;
    width: 100%;
    overflow: hidden;
    color: #e5e5e5;
    margin-left: 10px;
`
