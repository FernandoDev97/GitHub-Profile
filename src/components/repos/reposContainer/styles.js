import styled from 'styled-components';

export const Section = styled.section`
    width: 65%;
    height: 70vh;
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-left: 9%;

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

export const ListOfReposContainer = styled.div`
    height: 90%;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.div`
    width: 100%;
    height: 100px;
    background: rgba(0,0,0,.4);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
        background-color:rgba(0,0,0,.3);
    }
`
export const RepoName = styled.h1 `
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    color: #E5E5E5;
`

export const RepoDescription = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #999;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
`

