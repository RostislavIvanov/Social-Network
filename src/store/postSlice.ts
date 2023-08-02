import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IAddCommentAction, IPost} from "../types/IPost";
import moment from "moment";
interface IinitialState {
    posts: IPost[]
}
const initialState : IinitialState = {
    posts: [{
        message: 'Hello, this is my first post!',
        id: 0,
        likes: 8,
        comments: [
            'Fuck you!', 'Скинь косарь по братски'
        ],
        date: 'July 28th 2023'
    }, {
        message: 'The second post',
        id: 1,
        likes: 12,
        comments: [
            'Amazing!', 'Good', 'You can bro!'
        ],
        date: 'July 27th 2023'
    }]
}
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        Like: (state, action : PayloadAction<number> ) => {
            state.posts.filter(el => el.id === action.payload)[0].likes++
        },
        DeleteLike: (state, action : PayloadAction<number> ) => {
            state.posts.filter(el => el.id === action.payload)[0].likes--
        },
        addPost : (state, action:PayloadAction<string>) => {
            state.posts.push({
                likes: 0,
                comments: [],
                id: Date.now(),
                message: action.payload,
                date: moment().format("MMMM Do YYYY")
            })
        },
        addComment : (state, action: PayloadAction<IAddCommentAction>) => {
            state.posts.filter(el => el.id === action.payload.id)[0].comments.push(action.payload.comment)
        }
    },
})

// Action creators are generated for each case reducer function
export const { Like, DeleteLike, addPost, addComment } = postSlice.actions
export default postSlice.reducer