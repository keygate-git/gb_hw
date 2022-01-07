export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DELETE_MESSAGE = 'CHATS::DELETE_MESSAGE';

export const addChat = (newName, userName) => ({
    type: ADD_CHAT,
    payload: {
        newName: newName,
        userName: userName
    }
});

export const deleteChat = (chats) => ({
    type: DELETE_CHAT,
    payload: {
        chats: chats
    }
});

export const addMessage = (chatId, text) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        text: text
    }
})