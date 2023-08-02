import React from 'react';
import './App.css'
import ProfilePage from "./pages/ProfilePage";
import NewHeader from "./components/NewHeader";
import {Route, Routes} from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import MessengerPage from "./pages/MessengerPage";

const App = () => {
    return (
        <>
            <NewHeader/>
            <Routes>
                <Route path={'/profile'} Component={ProfilePage}/>
                <Route path={'/news'} Component={NewsPage}/>
                <Route path={'/messenger'} Component={MessengerPage}/>
            </Routes>
        </>
    );
};

export default App