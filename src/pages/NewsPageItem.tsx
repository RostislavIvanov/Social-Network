import React from 'react';
import {Box, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import ItemHeader from "../components/ItemHeader";
import FeedbackPostData from "../components/FeedbackPostData";
import FeedbackButtons from "../components/UI/FeedbackButtons";
import {useAppSelector} from "../hooks/reduxHooks";

const NewsPageItem = () => {
    const {news} = useAppSelector(state => state.newsReducer)
    const url = window.location.pathname;
    const newsItem = news.filter(el => el.id == url.split('/').pop())
    return (
        <Box sx={{backgroundColor: '#F2F3F5'}}>
            <Box sx={{pt: 10, pb: 10}}>
                {newsItem[0]
                    ? <Container maxWidth={'md'} sx={{
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
                                    {newsItem[0].description}
                                </Typography>
                            </Grid>
                            <Grid item flexGrow={1}>
                                <CardMedia
                                    sx={{height: 440, borderRadius: 2}}
                                    image={newsItem[0].urls.regular}
                                    title="Contemplative Reptile"
                                />
                            </Grid>
                            <Grid item>
                                <FeedbackPostData likesQuantity={newsItem[0].likes} commentsQuantity={54}/>
                            </Grid>
                            <Grid item sx={{mb: 1}}>
                                <FeedbackButtons dispatchIfLike={() => {
                                }} dispatchIfDeleteLike={() => {
                                }}/>
                            </Grid>
                            <Grid item sx={{mb: 1}}>
                                <Typography>Здесь должен быть список комментариев, но апи фоток его не подразумевает, а подключать новое отдельно для комментариев довольно неудобно((</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    : <Typography>Новость не найдена</Typography>

                }

            </Box>
        </Box>

    );
};

export default NewsPageItem;