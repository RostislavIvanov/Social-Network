import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {INews} from "../types/INews";

export const fetchNews = createAsyncThunk(
    'news/fetching',
    async (page : number, thunkAPI) => {
        try {
            const response = await axios.get<INews[]>('https://api.unsplash.com/photos/?client_id=932J3wZjOgc8uYf0iaNl12dpbYedp05aWOSP_p5rQJE', {
                params: {
                    page: page
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки данных')
        }
    })