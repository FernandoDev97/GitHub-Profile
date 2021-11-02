import React, { useContext } from 'react';
import { useQuery } from '../hooks/useQuery';
import Container from '../components/home/container'
import Main from '../components/home/main'
import UserContainer from '../components/home/userContainer';
import UserPicture from '../components/home/userPicture';
import UserDetails from '../components/home/userDetails';
import UserNumbers from '../components/home/userNumbers';
import { context } from '../context';
import ImageArea from '../components/home/imageArea';


export default function Home() {
    const ctx = useContext(context);
    const query = useQuery();

    return (
        <Container>
            <Main username={query.get('username')} />
            {ctx.userData?.name ?
            <UserContainer>
                <React.Fragment>
                    <UserPicture url={ctx.userData?.avatar_url} />
                    <UserDetails 
                    name={ctx.userData?.name} login={ctx.userData?.login} 
                    bio={ctx.userData?.bio} location={ctx.userData?.location} 
                    company={ctx.userData?.company} blog={ctx.userData?.blog} />
                    <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                </React.Fragment>
            </UserContainer>
             : <ImageArea/> }
        </Container>
    );
}