import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
    MainSection,
    MainTitle,
    MainInputContainer,
    MainInput,
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
            <MainTitle>Digite o nome do desenvolvedor abaixo</MainTitle>
            <MainInputContainer>
                <MainInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <Link to={`/?username=${searchValue}`}>
                    <FiSearch size={15} />
                </Link>
            </MainInputContainer>
        </MainSection>
    );
}

export default Main;