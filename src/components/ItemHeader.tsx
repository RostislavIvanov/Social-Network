import React, {FC} from 'react';
import {Avatar, Grid, Typography} from "@mui/material";

interface IPostItemHeaderProps {
    date?: string
}
const ItemHeader : FC<IPostItemHeaderProps> = ({date = ''}) => {
    return (
        <>
            <Grid container alignItems='center' spacing={1} sx={{mb: 1}}>
                <Grid item>
                    <Avatar sx={{width: 40, height: 40}} alt="Rostislav Ivanov" src=''/>
                </Grid>
                <Grid item>
                    <Typography>
                        <strong>Кто-то</strong>
                        <span style={{opacity: 0.7}}> поделился записью</span>
                    </Typography>
                    <Typography sx={{opacity: 0.7}}>{date}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ItemHeader;