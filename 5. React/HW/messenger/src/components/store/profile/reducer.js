import { SHOW_NAME, CHANGE_NAME } from './actions';

export const initialState = {
    name: 'default',
    showName: true,
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
        default:
            return state;
    }
};