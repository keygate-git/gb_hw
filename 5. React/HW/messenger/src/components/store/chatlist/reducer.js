import { INIT_CHATS, ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from "./actions";

export const initialChats = {
    id1: {
        name: 'Chat1',
        messageList: []
    }
    ,
    id2: {
        name: 'Chat2',
        messageList: []
    }
};

export const chatlistReducer = (state = initialChats, action) => {
    switch (action.type) {
        case INIT_CHATS:
            return {
                ...action.payload
            }
        case ADD_CHAT:
            return {
                ...state, [action.payload.newName]: {
                    name: action.payload.userName, messageList: []
                }
            }
        case DELETE_CHAT:
            return {
                ...action.payload.chats
            }
        case ADD_MESSAGE:
            return {
                ...state, [action.payload.chatId]: {
                    name: state[action.payload.chatId].name, messageList: [...state[action.payload.chatId].messageList, action.payload.text]
                }
            }
        default:
            return state;
    }
}