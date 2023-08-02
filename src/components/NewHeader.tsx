import React, {FC} from 'react';
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";


const NewHeader: FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('profile');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        navigate(`/${newValue}`);

    };

    return (
        <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 5 }} elevation={3}>
            <BottomNavigation sx={{boxShadow: '0px 5px 5px -5px rgba(34, 60, 80, 0.6)' }}
                              value={value}
                              onChange={handleChange}>
                <BottomNavigationAction
                    label="Profile"
                    value="profile"
                    icon={<HomeIcon/>}
                />
                <BottomNavigationAction
                    label="Messages"
                    value="messages"
                    icon={<ChatBubbleIcon/>}
                />
                <BottomNavigationAction
                    label="News"
                    value="news"
                    icon={<NewspaperIcon/>}
                />
            </BottomNavigation>
        </Paper>
    );
};

export default NewHeader