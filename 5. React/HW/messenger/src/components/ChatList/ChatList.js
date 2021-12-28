
import { NavLink, Outlet } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';


function ChatList(props) {
    const onRemoveChat = props.onRemoveChat;
    const removeChat = (e) => {
        onRemoveChat(e.target.id);
    }

    return <div className="Chats">
        <div className="chatList">
            <List>
                {Object.entries(props.chatList).map((chatId) => <div className='listItem' key={`${chatId[0]}`} ><NavLink to={`/chats/${chatId[0]}/`} >< ListItem><ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary={chatId[1].name} /></ListItemButton></ListItem></NavLink><button className='deleteButton' id={`${chatId[0]}`} onClick={removeChat}>х</button></div>)}
            </List>
            <button className='addButton' onClick={props.onAddChat}>New Chat</button>
        </div >
        <Outlet />
    </div >
}

export default ChatList;
