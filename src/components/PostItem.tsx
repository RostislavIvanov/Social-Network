import React, {FC, RefObject, useRef} from 'react';
import {Box, Divider, Typography} from "@mui/material";
import FeedbackPostData from "./FeedbackPostData";
import PostFeedbackButtons from "./PostFeedbackButtons";
import {IPost} from "../types/IPost";
import ItemHeader from "./ItemHeader";
import CommentInput from "./CommentInput";
import CommentsList from "./CommentsList";

interface IPostItemProps {
    post: IPost
}

const PostItem: FC<IPostItemProps> = ({post}) => {
    const commentInputRef: RefObject<HTMLInputElement> = useRef(null);
    return (
        <>
            <Box sx={{background: 'white', borderRadius: 2, p: 2, mt: 2}}>
                <ItemHeader date={post.date}/>
                <Typography sx={{fontSize: 24}}>{post.message}</Typography>
                <Divider sx={{mt: 1, mb: 1}}/>
                <FeedbackPostData likesQuantity={post.likes} commentsQuantity={post.comments.length}/>
                <Divider sx={{mt: 1, mb: 1}}/>
                <PostFeedbackButtons commentInputRef={commentInputRef} likesQuantity={post.likes}
                                     commentsQuantity={post.comments.length} id={post.id}/>
                <Divider sx={{mt: 1, mb: 1}}/>
                {post.comments.length > 0 &&
                    <CommentsList id={post.id} comments={post.comments}/>
                }
                <CommentInput id={post.id} inputRef={commentInputRef}/>
            </Box>
        </>
    );
};

export default PostItem;