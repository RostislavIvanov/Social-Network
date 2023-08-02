import React, {FC} from 'react';
import {Avatar, Grid, Typography} from "@mui/material";

interface ICommentsItemProps {
    comment: string
}

const CommentsItem: FC<ICommentsItemProps> = ({comment}) => {
    return (
        <>
            <Grid container alignItems='flex-start' sx={{mb: 1, mt: 1}}>
                <Grid item>
                    <Avatar sx={{width: 32, height: 32, mr: 1}} alt="Unknown"/>
                </Grid>
                <Grid item sx={{mt: 0.5}}>
                    <Typography component={'span'} sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        p: 1,
                        borderRadius: 5,
                        color: '#3B3B3B',
                    }}>{comment}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default CommentsItem;