import { SHOW_NAME, CHANGE_NAME, SIGN_IN, SIGN_OUT } from './actions';

export const initialState = {
    userId: '',
    name: 'default',
    showName: true,
    isAuthed: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                showName: action.payload,
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case SIGN_IN:
            return {
                ...state, isAuthed: true, userId: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                isAuthed: false, userId: ''
            }
        default:
            return state;
    }
};