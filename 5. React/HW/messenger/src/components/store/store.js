import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatlistReducer } from "./chatlist/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chatlist: chatlistReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);