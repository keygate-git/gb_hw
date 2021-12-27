import './Chats.css'
import { useEffect, useState, useParams } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import ChatList from '../ChatList/ChatList';
import List from '@mui/material/List';
import Router from '../Router/Router';



function Chats() {
    const params = useParams();
    // console.log(params);
    const initialChats = {
        id1: {
            name: 'Chat1',
            messageList: [{ text: "FirstMessage", author: "Robot" }]
        }
        ,
        id2: {
            name: 'Chat2',
            messageList: [{ text: "FirstMessage", author: "Author" }]
        }
    };

    const [chats, setChats] = useState(initialChats);

    const [messageList, setMessageList] = useState(
        []
    );

    // const chatList = [{
    //     title: 'chat 1',
    //     key: Date.now()
    // },
    // {
    //     title: 'chat 2',
    //     key: Date.now()
    // }];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.input.value != '') {
            setMessageList([...messageList, { author: 'Author', text: event.target.input.value, key: Date.now() }]);
            event.target.input.value = '';
        }
    };

    useEffect(() => {
        if (messageList.length != 0 && messageList[messageList.length - 1].author != 'Robot') {
            setTimeout(() => { setMessageList([...messageList, { author: 'Robot', text: 'Thank you for your message', key: Date.now() }]) }, 2000);
        };
    }, [messageList]);




    return (
        <div className="Chats">
            <div className="chatList">
                <List>
                    <ChatList chatList={chats} />
                </List>
            </div>
            <div className="messenger">
                <div className="messageField">
                    <Message messages={messageList} />
                </div>
                <Form onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Chats;

