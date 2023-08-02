import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {FC} from "react";
import {useNavigate} from 'react-router-dom'
import TabSection from "../TabSection";
import Posts from "../Posts";
import {Container} from "@mui/material";
import AllProfileInfo from "../AllProfileInfo";

interface ISectionDividerProps {
    sections: string[];
}

const SectionDivider: FC<ISectionDividerProps> = ({sections}) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(2);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(`/profile/${sections[newValue].toLowerCase()}`)
    };
    return (
        <>
            <Container maxWidth={'md'}>
                <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
                    <Tabs value={value} onChange={handleChange} centered>
                        {sections.map((section) => <Tab key={section} label={section}/>)}
                    </Tabs>
                </Box>
            </Container>
            <TabSection value={value} index={0}>
                {/*<AllProfileInfo/>*/}
            </TabSection>
            <TabSection value={value} index={1}>
               fgfg
            </TabSection>
            <TabSection value={value} index={2}>
                <Posts/>
            </TabSection>
        </>


    );
};
export default SectionDivider;