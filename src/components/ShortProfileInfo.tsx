import React, {FC} from 'react';
import {Avatar, AvatarGroup, Box, Grid, Divider, Typography, Container} from "@mui/material";

const ShortProfileInfo: FC = () => {
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{pb: 4}}>
                <Grid container
                      direction="row"
                      alignItems="center"
                      spacing={4}>
                    <Grid item>
                        <Avatar
                            src='/images/avatar.jpg'
                            sx={{width: 150, height: 150}}
                            alt="Remy Sharp"
                        />
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontWeight: 700}} variant="h4">Ростислав Иванов</Typography>
                        <Typography sx={{fontWeight: 600, fontSize: 20}}>Москва</Typography>
                        <Typography sx={{fontWeight: 600, fontSize: 20}}>Друзья: 421</Typography>
                        <AvatarGroup sx={{width: 185, mt: 0.5}} total={421}>
                            <Avatar alt="Remy Sharp" src="/images/dog2.jpg"/>
                            <Avatar alt="Travis Howard" src="/images/dog.jpg"/>
                            <Avatar alt="Agnes Walker" src="/images/horse.jpg"/>
                            <Avatar alt="Trevor Henderson" src="/images/cat.jpg"/>
                        </AvatarGroup>
                    </Grid>
                </Grid>
                <Divider sx={{mt: 3}}/>
            </Box>
        </Container>
    );
};

export default ShortProfileInfo;