import React, { useContext } from 'react';
import { context } from '../context';
import { RepoContainer } from '../components/repos/container/styles';
import ReposContainer from "../components/repos/reposContainer";
import Header from '../components/header';
import Profile from '../components/profile/container';
import Picture from '../components/profile/profilePicture';
import Details from '../components/profile/profileDetails';
import Numbers from '../components/profile/profileNumbers';

const Repos = () => {
    const ctx = useContext(context);

    return (
        <RepoContainer>
            <Header/>
            <Profile>
                <Picture  url={ctx.userData?.avatar_url}/>
                <Details  
                name={ctx.userData?.name} username={ctx.userData?.login} 
                bio={ctx.userData?.bio} location={ctx.userData?.location} 
                company={ctx.userData?.company} blog={ctx.userData?.blog}/>
                <Numbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
            </Profile>
            <ReposContainer name={ctx.userData?.name} repos={ctx.userRepos} />
        </RepoContainer>    
    );
}

export default Repos;