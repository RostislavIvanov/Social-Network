import React, {FC, RefObject, useState} from 'react';
import SendIcon from "@mui/icons-material/Send";
import {Avatar, Grid, TextField} from "@mui/material";
import {useAppDispatch} from "../hooks/reduxHooks";
import {addComment} from "../store/postSlice";

interface ICommentInputProps {
    id: number;
    inputRef: RefObject<HTMLInputElement>;
}

const CommentInput:FC<ICommentInputProps> = ({id,inputRef}) => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleAddComment = () => {
        dispatch(addComment({id: id, comment: inputValue}));
        setInputValue('')
    }
    return (
        <>
            <Grid container alignItems={'center'}>
                <Grid item>
                    <Avatar sx={{width: 32, height: 32, mr: 1}} alt="Rostislav Ivanov" src='/images/avatar.jpg'/>
                </Grid>
                <Grid item flexGrow={1}>
                    <TextField  value={inputValue} onChange={handleInput} inputRef={inputRef} multiline variant="filled" InputProps={{
                        disableUnderline: true, endAdornment: (
                            <SendIcon onClick={handleAddComment} sx={{color: 'grey', mr: 2, my: 'auto', cursor: 'pointer'}}/>
                        )
                    }} sx={{
                        '& .MuiInputBase-root': {borderRadius: 10,},
                        '& .MuiOutlinedInput-notchedOutline': {borderRadius: 10},
                        '& .MuiInputBase-input': {fontSize: 20},
                        width: '100%',
                    }} label="Write a comment..."
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default CommentInput;