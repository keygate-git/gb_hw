import { userRefChatlist, userRefChatlistById, userRefChatMessageById } from "../../../service/firebase";
import { onValue, set } from "firebase/database";

export const INIT_CHATS = 'CHATS::INIT_CHATS';
export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DELETE_MESSAGE = 'CHATS::DELETE_MESSAGE';

export const initializeChats = (chatlist) => ({
    type: INIT_CHATS,
    payload: chatlist
})

// export const addChat = (newName, userName) => ({
//     type: ADD_CHAT,
//     payload: {
//         newName: newName,
//         userName: userName
//     }
// });

// export const deleteChat = (chats) => ({
//     type: DELETE_CHAT,
//     payload: {
//         chats: chats
//     }
// });

// export const addMessage = (chatId, text) => ({
//     type: ADD_MESSAGE,
//     payload: {
//         chatId: chatId,
//         text: text
//     }
// })

// export const addMessageWithReply = (chatId, text) => (dispatch) => {
//     dispatch(addMessage(chatId, text));

//     if (timeout) {
//         clearTimeout(timeout);
//     }

//     timeout = setTimeout(() => {
//         dispatch(addMessage(chatId, { author: 'Robot', text: 'Thank you for your message', key: Date.now() }))
//     }, 2000);
// }

export const initChats = (userId) => (dispatch) => {
    onValue(userRefChatlist(userId), (snapshot) => {
        const userDataChatlist = snapshot?.val();
        dispatch(initializeChats(userDataChatlist));
    });
};

export const setAddChat = (userId, newName, userName) => () => {
    set(userRefChatlistById(userId, newName), { name: userName, messageList: [] });
}

export const setDeleteChat = (userId, chatId) => () => {
    set(userRefChatlistById(userId, chatId), null);
}

let timeout;

export const setAddMessageWithReply = (userId, chatId, text, number) => () => {
    set(userRefChatMessageById(userId, chatId, number), text);

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        set(userRefChatMessageById(userId, chatId, number + 1), { author: 'Robot', text: 'Thank you for your message', key: Date.now() });
    }, 2000);
}