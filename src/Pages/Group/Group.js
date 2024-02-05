import React from 'react';
import Header from '../../component/Header/Header';
import GroupBanner from '../../component/GroupBanner/GroupBanner';
import GroupPosts from '../../component/GroupPosts/GroupPosts';

const Group = () => {
    return (
        <div>
            <Header></Header>
            <GroupBanner></GroupBanner>
            <GroupPosts></GroupPosts>
        </div>
    );
};

export default Group;