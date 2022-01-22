import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Main from '../Main/Main'
import Chats from '../Chats/Chats';
import ChatList from '../ChatList/ChatList';
import Profile from '../Profile/Profile';
import Doesnotexist from '../Doesnotexist/Doesnotexist'
import Articles from '../Articles/Articles';
import { PublicOutlet } from '../PublicOutlet/PublicOutlet';
import { PrivateOutlet } from '../PrivateOutlet/PrivateOutlet';
import { useDispatch, useSelector } from 'react-redux';
import { initAuthTracking } from '../store/profile/actions';

const Router = () => {
    const storeData = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initAuthTracking());
    }, []);
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route element={<PublicOutlet />}>
                    <Route path='/' element={<Main />} ></Route>
                    <Route path='signup' element={<Main isSignUp />} ></Route>
                </Route>
                <Route element={<PrivateOutlet />}>
                    <Route path='/profile/' element={<Profile />} />
                </Route>
                <Route element={<PrivateOutlet />}>
                    <Route path='/chats/' element={<ChatList />} >
                        <Route path=':chatId' element={<Chats />} />
                    </Route>
                </Route>
                <Route element={<PrivateOutlet />}>
                    <Route path='/articles' element={<Articles />} />
                </Route>
                <Route path='*' element={<Doesnotexist />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;