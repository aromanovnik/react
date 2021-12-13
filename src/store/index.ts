import { createStore } from 'redux';
import {userReducer} from "./user/reducer";


export const store = createStore(
    userReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
