import React from 'react';
import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Main from '../Main/Main'
import Chats from '../Chats/Chats';
import AllChats from '../AllChats/AllChats';
import Profile from '../Profile/Profile';
import Doesnotexist from '../Doesnotexist/Doesnotexist'

const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Main />} ></Route>
                <Route path='/profile/' element={<Profile />} />
                <Route path='/chats/' element={<AllChats />} >
                    <Route path=':chatId' element={<Chats />} />
                </Route>
                <Route path='*' element={<Doesnotexist />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;