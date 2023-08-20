import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {Box} from "@mui/material";
import NewsItem from "./NewsItem";
import {fetchNews} from "../store/ActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import LinearProgress from '@mui/material/LinearProgress';

const NewsList :FC = () => {
    const [page, setPage] = useState<number>(1);
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchNews(page))
    }, [page])

    const lastElement = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();
    useEffect(() => {
        if (isLoading) return
        const callback: IntersectionObserverCallback = (entries, observer) => {
            if (entries[0].isIntersecting && page < 100) {
                setPage(page + 1);
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current!);
        return () => observer.current?.disconnect();
    }, [isLoading]);
    return (
        <Box sx={{pt: 10, pb: 10}}>
            {isLoading &&
                <LinearProgress/>
            }
            {news.map(newItem =>
                <NewsItem key={newItem.id} newItem={newItem}/>
            )}

            <div style={{height: 20}} ref={lastElement}></div>
        </Box>
    );
}

export default NewsList;