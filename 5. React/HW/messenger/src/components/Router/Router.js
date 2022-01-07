import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Main from '../Main/Main'
import Chats from '../Chats/Chats';
import ChatList from '../ChatList/ChatList';
import Profile from '../Profile/Profile';
import Doesnotexist from '../Doesnotexist/Doesnotexist'

const Router = () => {

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Main />} ></Route>
                <Route path='/profile/' element={<Profile />} />
                <Route path='/chats/' element={<ChatList />} >
                    <Route path=':chatId' element={<Chats />} />
                </Route>
                <Route path='*' element={<Doesnotexist />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;