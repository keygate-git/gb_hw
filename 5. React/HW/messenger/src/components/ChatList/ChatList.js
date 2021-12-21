
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';


function ChatList(props) {
    return (props.chatList.map((chat) => < ListItem><ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary={chat.title} /></ListItemButton></ListItem>))
}

export default ChatList;
