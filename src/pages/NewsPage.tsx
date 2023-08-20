import React, {FC} from 'react';
import {Box} from "@mui/material";
import NewsList from "../components/NewsList";

const NewsPage: FC = () => {
    return (
        <>
            <Box sx={{backgroundColor: '#F2F3F5'}}>
                <NewsList/>
            </Box>
        </>
    );
};

export default NewsPage;