import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 95%;
    border-radius: 10px;

    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const Title = styled.h1`
    font-size: 2.0rem;
    font-style: italic;
    margin-top: 10px;
    color: #000;
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
    height: 150px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    border-radius: 5px;
    padding: 30px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
        background-color:rgba(0,0,0, .0);
    }
`
export const RepoName = styled.h1 `
    font-size: 26px;
    width: 100%;
    overflow: hidden;
    color: #111;
`

export const RepoDescription = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #333;
    width: 80%;
    height: 30px;
    line-height: 1.3;
    margin-top: 10px;
`

