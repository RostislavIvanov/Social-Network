import React, {FC, RefObject, useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplyIcon from '@mui/icons-material/Reply';
import {useAppDispatch} from "../hooks/reduxHooks";
import {Like, DeleteLike} from "../store/postSlice";
import FeedbackButtons from "./UI/FeedbackButtons";

interface IFeedbackButtonsProps {
    commentInputRef: RefObject<HTMLInputElement>;
    likesQuantity: number;
    commentsQuantity: number;
    id: number;
}

const PostFeedbackButtons: FC<IFeedbackButtonsProps> = ({commentInputRef, likesQuantity, commentsQuantity, id}) => {
    const dispatch = useAppDispatch()
    const handleClickComment = () => {
        commentInputRef.current?.focus()
    }
    return (
        <FeedbackButtons
            handleClickComment={handleClickComment}
            dispatchIfLike={() => dispatch(Like(id))}
            dispatchIfDeleteLike={() => dispatch(DeleteLike(id))}
        />
    )
}

export default PostFeedbackButtons