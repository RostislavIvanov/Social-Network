import React from 'react';
import './App.css'
import ProfilePage from "./pages/ProfilePage";
import NewHeader from "./components/NewHeader";
import {Route, Routes} from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import MessengerPage from "./pages/MessengerPage";
import NewsPageItem from "./pages/NewsPageItem";

const App = () => {
    return (
        <>
            <NewHeader/>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path={'/profile'} Component={ProfilePage}/>
                <Route path={'/news'} Component={NewsPage}/>
                <Route path={'/news/:id'} Component={NewsPageItem}/>
                <Route path={'/messenger'} Component={MessengerPage}/>
            </Routes>
        </>
    );
};

export default App