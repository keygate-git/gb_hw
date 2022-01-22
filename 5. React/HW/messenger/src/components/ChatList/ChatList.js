import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import { initChats, setAddChat, setDeleteChat } from '../store/chatlist/actions'


function ChatList() {

    const storeData = useSelector((state) => state.chatlist);
    const profileData = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initChats(profileData.userId));
    }, []);

    const handleAddChat = () => {
        let newName;
        if (Object.keys(storeData).length == 0 || !storeData) {
            newName = 'id1'
        } else {
            newName = 'id' + (+(Object.keys(storeData)[Object.keys(storeData).length - 1].slice(2)) + 1);
        }
        let userName = '';
        for (; userName.length == 0;) {
            userName = prompt('Enter name');
        };
        dispatch(setAddChat(profileData.userId, newName, userName));
    };

    const handleRemoveChat = (e) => {
        dispatch(setDeleteChat(profileData.userId, e.target.id));
    }

    return <div className="Chats">
        <div className="chatList">
            <List>
                {Object.entries(storeData).map((chatId) => <div className='listItem' key={`${chatId[0]}`} ><NavLink to={`/chats/${chatId[0]}/`} >< ListItem><ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary={chatId[1].name} /></ListItemButton></ListItem></NavLink><button className='deleteButton' id={`${chatId[0]}`} onClick={handleRemoveChat}>х</button></div>)}
            </List>
            <button className='addButton' onClick={handleAddChat}>New Chat</button>
        </div >
        <Outlet />
    </div >

}

export default ChatList;
