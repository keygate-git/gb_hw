import { API_REQUEST, API_SUCCESS, API_FAILURE } from './actions'

export const initialData = {
    status: '',
    data: []
};

export const apiReducer = (state = initialData, action) => {
    switch (action.type) {
        case API_REQUEST:
            return {
                ...state, status: 'pending'
            }
        case API_SUCCESS:
            return {
                ...state, status: 'success', data: action.payload
            }
        case API_FAILURE:
            return {
                ...state, status: action.payload
            }
        default:
            return state;
    }

}