import {configureStore} from "@reduxjs/toolkit";
import postReducer from './postSlice'
import newsReducer from './newsSlice'

export const store = configureStore({
    reducer: {
        postReducer,
        newsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch