import {combineReducers, createStore} from 'redux';
import {userReducer} from "./user/reducer";
import {chatsReducer} from "./chats/reducer";


export const store = createStore(
    combineReducers({
        user: userReducer,
        chats: chatsReducer,
    }),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
