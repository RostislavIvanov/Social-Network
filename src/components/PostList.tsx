import React, {FC} from 'react';
import {Container} from "@mui/material";
import PostItem from "./PostItem";
import {IPost} from "../types/IPost";

interface IPostListProps {
    posts: IPost[]
}

const PostList: FC<IPostListProps> = ({posts}) => {
    return (
        <Container maxWidth={'lg'}>
            {posts.map((post) =>
                <PostItem key={post.id} post={post}/>)
            }
        </Container>
    );
};

export default PostList;