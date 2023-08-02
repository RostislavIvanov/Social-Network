import React, {FC} from 'react';
import {Grid, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IFeedbackPostDataProps {
    likesQuantity: number;
    commentsQuantity: number;
}

const FeedbackPostData: FC<IFeedbackPostDataProps> = ({likesQuantity, commentsQuantity}) => {
    return (
        <Grid container alignItems='center'>
            <Grid item>
                <FavoriteIcon sx={{color: 'red', mt: 0.5}}/>
            </Grid>
            <Grid item sx={{ml: 0.2}}>
                <Typography sx={{opacity: 0.7}} component={'span'}>{likesQuantity}</Typography>
            </Grid>
            {commentsQuantity !== 0 && (
                <Grid item flexGrow={1} sx={{textAlign: 'right'}}>
                    <Typography sx={{opacity: 0.7}}>{commentsQuantity} comments</Typography>
                </Grid>
            )}

        </Grid>
    );
};

export default FeedbackPostData;