import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Main from '../Main/Main'
import Chats from '../Chats/Chats';
import ChatList from '../ChatList/ChatList';
import Profile from '../Profile/Profile';
import Doesnotexist from '../Doesnotexist/Doesnotexist'

const Router = () => {

    const initialChats = {
        id1: {
            name: 'Chat1',
            messageList: []
        }
        ,
        id2: {
            name: 'Chat2',
            messageList: []
        }
    };

    const [chats, setChats] = useState(initialChats);

    const onAddMessage = (text, chatId) => {
        setChats({
            ...chats, [chatId]: {
                name: chats[chatId].name, messageList: [...chats[chatId].messageList, text]
            }
        })
    };

    const handleAddChat = () => {
        let newName;
        if (Object.keys(chats).length == 0) {
            newName = 'id1'
        } else {
            newName = 'id' + (+(Object.keys(chats)[Object.keys(chats).length - 1].slice(2)) + 1);
        }
        let userName = '';
        for (; userName.length == 0;) {
            userName = prompt('Enter name');
        };
        setChats({
            ...chats, [newName]: {
                name: userName, messageList: []
            }
        });
    };

    const handleRemoveChat = (chatId) => {
        delete chats[chatId];
        setChats({ ...chats });
    }

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Main />} ></Route>
                <Route path='/profile/' element={<Profile />} />
                <Route path='/chats/' element={<ChatList chatList={chats} onAddChat={handleAddChat} onRemoveChat={handleRemoveChat} />} >
                    <Route path=':chatId' element={<Chats messages={chats} onAddMessage={onAddMessage} />} />
                </Route>
                <Route path='*' element={<Doesnotexist />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;