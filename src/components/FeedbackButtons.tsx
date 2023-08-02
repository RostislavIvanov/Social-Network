import React, {FC, RefObject, useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplyIcon from '@mui/icons-material/Reply';
import {useAppDispatch} from "../hooks/reduxHooks";
import {Like, DeleteLike} from "../store/postSlice";

interface IFeedbackButtonsProps {
    commentInputRef: RefObject<HTMLInputElement>;
    likesQuantity: number;
    commentsQuantity: number;
    id: number;
}

const FeedbackButtons: FC<IFeedbackButtonsProps> = ({commentInputRef ,likesQuantity, commentsQuantity, id}) => {
    const dispatch = useAppDispatch()
    const [liked, setLiked] = useState<boolean>(false)
    const likeStyle = {
        width: '100%',
        color: liked ? 'red' : 'gray'
    }
    const handleLike = () => {
        if (liked) {
            dispatch(DeleteLike(id))
        } else {
            dispatch(Like(id))
        }
        setLiked(prevState => !prevState);

    }

    const handleClickComment = () => {
        commentInputRef.current?.focus()
    }
    return (
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
    );
};

export default FeedbackButtons;