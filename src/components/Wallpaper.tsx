import React from 'react';
import {CardMedia, Container} from "@mui/material";

const Wallpaper = () => {
    return (
        <Container maxWidth={'lg'}>
            <CardMedia
                sx={{height: 440, mb: 3, borderRadius: 2}}
                image="https://s.zefirka.net/images/2016-12-01/krasivye-pejzazhi-kanady/krasivye-pejzazhi-kanady-23.jpg"
                title="Contemplative Reptile"
            />
        </Container>
    );
};

export default Wallpaper;