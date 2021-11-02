import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../../assets/img/logo.png'
import {
    MainSection,
    MainTitle,
    MainInputContainer,
    MainInput,
    Button,
    Image,
    Subtitle
} from './styles';

import client from '../../../services/client';
import { context } from '../../../context';

const Main = props => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await client.get(`/${props.username}`);
                const repos = await client.get(`/${props.username}/repos`);
                const followers = await client.get(`/${props.username}/followers`);

                ctx.setUserData(response.data);
                ctx.setUserRepos(repos.data);
                ctx.setUserFollowers(followers.data);
            } catch(err) {
                alert('Ops, verifique se o campo está preenchido corretamente!');
            }
        })()
    }, [props.username]);

    return (
        <MainSection>
            <Image src={Img}/>
            <MainTitle>Buscar Usuário</MainTitle>
            <Subtitle>Digite aqui o login do usuário que deseja encontrar</Subtitle>
            <MainInputContainer>
                <MainInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <Link to={`/?username=${searchValue}`}>
                    <Button>Pesquisar</Button>
                </Link>
            </MainInputContainer>
        </MainSection>
    );
}

export default Main;