import './Chats.css'
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Message from '../Message/Message';
import Form from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatlist/actions'

function Chats() {
    const { chatId } = useParams();

    const storeData = useSelector((state) => state.chatlist);
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.input.value != '') {
            const newNessage = { author: 'Author', text: event.target.input.value, key: Date.now() };
            dispatch(addMessage(chatId, newNessage));
            event.target.input.value = '';
        }
    };

    useEffect(() => {
        if (storeData[chatId] && storeData[chatId].messageList.length != 0 && storeData[chatId].messageList[storeData[chatId].messageList.length - 1].author != 'Robot') {
            setTimeout(() => {
                const newNessage = { author: 'Robot', text: 'Thank you for your message', key: Date.now() };
                dispatch(addMessage(chatId, newNessage));
            }, 2000);
        }
    }, [storeData]);


    if (!storeData[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <div className="messenger">
            <div className="messageField">
                <Message messages={storeData[chatId].messageList} />
            </div>
            <Form onSubmit={handleSubmit} className='form' />
        </div>
    );
}

export default Chats;

