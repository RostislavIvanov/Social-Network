import React, {FC} from 'react';
import ShortProfileInfo from "../components/ShortProfileInfo";
import Posts from "../components/Posts";
import Wallpaper from "../components/Wallpaper";

const ProfilePage: FC = () => {
    return (
        <>
            <Wallpaper/>
            <ShortProfileInfo/>
            {/*<SectionDivider sections={['Information', 'Friends', 'Posts']}/>*/}
            <Posts/>
        </>
    );
};

export default ProfilePage;