import React from 'react';
import Header from '../../component/Header/Header';
import GroupBanner from '../../component/GroupBanner/GroupBanner';
import GroupPostsSection from '../../component/GroupPostsSection/GroupPostsSection';

const Group = () => {
    return (
        <div>
            <Header></Header>
            <GroupBanner></GroupBanner>
            <GroupPostsSection></GroupPostsSection>
        </div>
    );
};

export default Group;