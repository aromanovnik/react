import {IChatsStore} from "./models";

const getChatsReducer = (state: IChatsStore) => state;

const getChats = (state: IChatsStore) => getChatsReducer(state).chats;
const getError = (state: IChatsStore) => getChatsReducer(state).error;
const getLoading = (state: IChatsStore) => getChatsReducer(state).isLoading;
