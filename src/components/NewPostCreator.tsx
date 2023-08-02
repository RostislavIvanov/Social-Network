import React, {FC, useRef, useState} from 'react';
import {Avatar, Box, Container, Grid, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useAppDispatch} from "../hooks/reduxHooks";
import {addPost} from "../store/postSlice";
import handleShiftEnter from "./NewPostCreator.utils";

const NewPostCreator: FC = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null!);
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleAddPost = () => {
        dispatch(addPost(inputValue))
        setInputValue('')
    }
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleAddPost();
        }
        if (event.key === 'Enter' && event.shiftKey) {
            handleShiftEnter(event,inputRef,setInputValue)
        }
    }

    return (
        <Container maxWidth={'lg'}>
            <Box>
                <Grid container alignItems='center' spacing={4}>
                    <Grid item>
                        <Avatar sx={{width: 50, height: 50}} alt="Remy Sharp" src='/images/avatar.jpg'
                        />
                    </Grid>
                    <Grid item flexGrow={1}>
                        <TextField multiline
                                   sx={{
                                       '& .MuiInputBase-root': {borderRadius: 10,},
                                       '& .MuiOutlinedInput-notchedOutline': {borderRadius: 10},
                                       '& .MuiInputBase-input': {fontSize: 20}, width: '100%',
                                   }}
                                   label="What's new?"
                                   inputRef={inputRef}
                                   value={inputValue}
                                   onChange={handleInput}
                                   onKeyDown={handleKeyDown}
                                   InputProps={{
                                       endAdornment: (
                                           <SendIcon sx={{color: 'grey', mr: 2, my: 'auto', cursor: 'pointer'}}
                                                     onClick={handleAddPost}/>
                                       )
                                   }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default NewPostCreator;