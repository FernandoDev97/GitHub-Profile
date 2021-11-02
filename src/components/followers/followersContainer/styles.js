import styled from 'styled-components';

export const Section = styled.section`
    width: 90%;
    height: 90%;
    border-radius: 10px;

    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-top: 10px;
    color: #222;
    width: 100%;
    text-align: center;
    height: 40px;
    font-style: italic;
`

export const ListFollowersContainer = styled.div`
    height: 90%;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`
export const BoxFollow = styled.div`
    width: 100%;
    height: 150px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all ease 0.2s;
    display: flex;
    align-items: center;

    &:hover {
        background-color:rgba(0,0,0,.1);
    }
`
export const Picture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`
export const Name = styled.h1 `
    font-size: 1.6rem;
    width: 100%;
    overflow: hidden;
    color: #222;
    margin-left: 12px;
    font-style: italic;
`
