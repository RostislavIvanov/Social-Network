import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {INews} from "../types/INews";
import {fetchNews} from "./ActionCreators";

interface INewsState {
    news: INews[];
    isLoading: boolean;
    error: string
}

const initialState: INewsState = {
    news: [],
    isLoading: false,
    error: ''
}
export const newsSlice = createSlice({
        name: 'news',
        initialState,
        reducers: {},
        extraReducers: {
            [fetchNews.fulfilled.type]: (state, action) => {
                const newNews = action.payload.filter((el : INews) => !state.news.some(item => item.id === el.id)
                );
                state.news = [...state.news, ...newNews];
                state.isLoading = false;
            }
            ,
            [fetchNews.pending.type]: (state) => {
                state.isLoading = true
            },
            [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false
                state.error = action.payload
            }

        }
    },
)

export default newsSlice.reducer