import React, {FC} from 'react';
import {Avatar, Grid, Typography} from "@mui/material";

interface IPostItemHeaderProps {
    date: string
}
const PostItemHeader : FC<IPostItemHeaderProps> = ({date}) => {
    return (
        <>
            <Grid container alignItems='center' spacing={1} sx={{mb: 1}}>
                <Grid item>
                    <Avatar sx={{width: 40, height: 40}} alt="Rostislav Ivanov" src='/images/avatar.jpg'/>
                </Grid>
                <Grid item>
                    <Typography>
                        <strong>Ростислав Иванов</strong>
                        <span style={{opacity: 0.7}}> поделился записью</span>
                    </Typography>
                    <Typography sx={{opacity: 0.7}}>{date}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default PostItemHeader;