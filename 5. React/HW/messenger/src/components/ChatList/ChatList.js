
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';


function ChatList(props) {

    return (Object.entries(props.chatList).map((chatId) => <NavLink to={`/chats/${chatId[0]}/`}>< ListItem><ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary={chatId[1].name} /></ListItemButton></ListItem></NavLink>));

}

export default ChatList;
