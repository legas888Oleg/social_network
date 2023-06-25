import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
