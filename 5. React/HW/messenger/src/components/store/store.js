import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatlistReducer } from "./chatlist/reducer";
import { apiReducer } from "./articles/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    profile: profileReducer,
    chatlist: chatlistReducer,
    articles: apiReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhacers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);