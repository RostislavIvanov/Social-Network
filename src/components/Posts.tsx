import React, {FC} from 'react';
import { Box} from "@mui/material";
import PostList from "./PostList";
import NewPostCreator from "./NewPostCreator";
import {useAppSelector} from "../hooks/reduxHooks";

const Posts: FC = () => {

const posts = useAppSelector(state => state.postReducer.posts)
    return (
        <>
            <Box sx={{background: 'rgba(0,0,0,0.05)'}}>
                <NewPostCreator/>
                <PostList posts={posts}/>
            </Box>
        </>
    );
};

export default Posts;