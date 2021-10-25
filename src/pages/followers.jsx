import React, { useContext } from 'react';

import FollowersSection from "../components/followers/container";
import FollowersContainer from '../components/followers/followersContainer';
import Header from '../components/header';
import { context } from '../context';


const Followers = () => {
    const ctx = useContext(context);

    return (
        <FollowersSection>
            <Header/>
            <FollowersContainer name={ctx.userData?.name} followers={ctx.userFollowers} />
        </FollowersSection>
    );
}

export default Followers;