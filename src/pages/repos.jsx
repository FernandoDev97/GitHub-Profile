import React, { useContext } from 'react';
import { context } from '../context';
import { Container } from '../components/repos/container/styles';
import ReposContainer from "../components/repos/reposContainer";
import Header from '../components/header';
import Profile from '../components/profile/profileContainer';
import Picture from '../components/profile/profilePicture';
import Details from '../components/profile/profileDetails';
import Numbers from '../components/profile/profileNumbers';
import SectionProfile from '../components/profile/sectionProfile';
import SectionAll from '../components/sectionAll';
import About from '../components/profile/aboutProfile';
import SectionRepos from '../components/repos/sectionRepos';

const Repos = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <Header/>
            <SectionAll>
                <SectionProfile>
                    <Profile>
                        <Picture  url={ctx.userData?.avatar_url}/>
                        <Details name={ctx.userData?.name} login={ctx.userData?.login} />
                        <Numbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
                    </Profile>
                    {ctx.userData?.bio || ctx.userData?.location || ctx.userData?.company || ctx.userData?.blog  ? 
                    <About  bio={ctx.userData?.bio} location={ctx.userData?.location} 
                            company={ctx.userData?.company} blog={ctx.userData?.blog}/>
                    : undefined}        
                </SectionProfile>
                <SectionRepos>
                    <ReposContainer name={ctx.userData?.name} repos={ctx.userRepos} />
                </SectionRepos>
            </SectionAll>
        </Container>    
    );
}

export default Repos;