import './Chats.css'
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Message from '../Message/Message';
import Form from '../Form/Form';

function Chats({ messages, onAddMessage }) {
    const { chatId } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.input.value != '') {
            const newNessage = { author: 'Author', text: event.target.input.value, key: Date.now() };
            onAddMessage(newNessage, chatId);
            event.target.input.value = '';
        }
    };

    useEffect(() => {
        if (messages[chatId] && messages[chatId].messageList.length != 0 && messages[chatId].messageList[messages[chatId].messageList.length - 1].author != 'Robot') {
            setTimeout(() => {
                const newNessage = { author: 'Robot', text: 'Thank you for your message', key: Date.now() };
                onAddMessage(newNessage, chatId);
            }, 2000);
        }
    }, [messages]);


    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }


    return (
        <div className="messenger">
            <div className="messageField">
                <Message messages={messages[chatId].messageList} />
            </div>
            <Form onSubmit={handleSubmit} className='form' />
        </div>
    );
}

export default Chats;

