import { SHOW_NAME, CHANGE_NAME, AUTH } from './actions';

export const initialState = {
    name: 'default',
    showName: true,
    isAuthed: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                showName: !state.showName,
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name,
            }
        case AUTH:
            return {
                ...state,
                isAuthed: !state.isAuthed,
            }
        default:
            return state;
    }
};