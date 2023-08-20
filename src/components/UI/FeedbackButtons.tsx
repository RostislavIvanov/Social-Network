import React, {FC, useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ReplyIcon from "@mui/icons-material/Reply";
import {DeleteLike, Like} from "../../store/postSlice";
import {Dispatch} from "@reduxjs/toolkit";

interface IFeedBackButtonsProps {
    handleClickComment?: () => void
    dispatchIfLike: () => void
    dispatchIfDeleteLike: () => void
}
const FeedbackButtons :FC<IFeedBackButtonsProps> = ({handleClickComment, dispatchIfLike, dispatchIfDeleteLike}) => {
    const [liked, setLiked] = useState<boolean>(false)
    const likeStyle = {
        width: '100%',
        color: liked ? 'red' : 'gray'
    }
    const handleLike = () => {
        if (liked) {
            dispatchIfDeleteLike()
        } else {
            dispatchIfLike()
        }
        setLiked(prevState => !prevState);
    }
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item lg={4} flexGrow={1}>
                        <Button onClick={handleLike} sx={likeStyle} variant="text">
                            <FavoriteIcon sx={{pr: 0.5}}/>Like
                        </Button>
                    </Grid>
                    <Grid item lg={4} flexGrow={1}>
                        <Button onClick={handleClickComment} sx={{width: '100%', color: 'grey'}} variant="text">
                            <InsertCommentIcon sx={{pr: 0.5}}/>Comment
                        </Button>
                    </Grid>
                    <Grid item lg={4} flexGrow={1}>
                        <Button sx={{width: '100%', color: 'grey'}} variant="text">
                            <ReplyIcon sx={{pr: 0.5}}/>Share
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default FeedbackButtons;