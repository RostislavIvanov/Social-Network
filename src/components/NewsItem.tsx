import React, {FC, memo, useState} from 'react';
import {CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import ItemHeader from "./ItemHeader";
import FeedbackPostData from "./FeedbackPostData";
import FeedbackButtons from "./UI/FeedbackButtons";
import {INews} from "../types/INews";
import {useNavigate} from "react-router-dom";

interface INewsItemProps {
    newItem: INews
}
const NewsItem : FC<INewsItemProps> = memo(({newItem}) => {
    const navigate = useNavigate()
    const [likes, setLikes] = useState<number>(newItem.likes)
    return (
        <>
            <Container maxWidth={'md'} sx={{
                borderRadius: 3,
                backgroundColor: 'white',
                boxShadow: '0px 1px 6px 2px rgba(34, 60, 80, 0.2)',
                mb: 3
            }}>
                <Grid container flexDirection={'column'}>
                    <Grid item sx={{mt: 2}}>
                        <ItemHeader/>
                        <Divider sx={{mt: 1, mb: 1}}/>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {newItem.description}
                        </Typography>
                    </Grid>
                    <Grid item flexGrow={1}>
                        <CardMedia
                            sx={{height: 440, borderRadius: 2}}
                            image={newItem.urls.regular}
                            title="Contemplative Reptile"
                        />
                    </Grid>
                    <Grid item>
                        <FeedbackPostData likesQuantity={likes} commentsQuantity={54}/>
                    </Grid>
                    <Grid item sx={{mb:1}}>
                        <FeedbackButtons handleClickComment={() => navigate(`/news/${newItem.id}`)} dispatchIfLike={() => setLikes(likes + 1)} dispatchIfDeleteLike={()=> setLikes(likes - 1)}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
})

export default NewsItem;