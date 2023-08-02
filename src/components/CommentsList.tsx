import React, {FC, useState} from 'react';
import {Box, Typography} from "@mui/material";
import CommentsItem from "./CommentsItem";

interface ICommentsListProps {
    comments: string[]
    id: number
}

const CommentsList: FC<ICommentsListProps> = ({comments, id}) => {
    const [shownAllComments, setShownAllComments] = useState(false)
    const handleShowAllComments = () => {
        setShownAllComments(!shownAllComments)
    }
    return (
        <>
            <Box>
                <Typography onClick={handleShowAllComments} component={'span'}
                            sx={{
                                fontWeight: '500',
                                opacity: 0.7,
                                cursor: 'pointer',
                                '&:hover': {textDecoration: 'underline'}
                            }}
                >
                    {shownAllComments ? 'Hide comments' : 'View more comments'}
                </Typography>
                {(shownAllComments)
                    ? comments.map((comment) => <CommentsItem comment={comment} key={comment.length * Math.random()}/>)
                    : <CommentsItem comment={comments[comments.length - 1]}/>
                }

            </Box>
        </>
    );
};

export default CommentsList;