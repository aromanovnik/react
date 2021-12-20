import {IStore} from "../../types/Store";
import {IChatsStore} from "../../types/Chats";

export const getChatsReducer = (state: IStore): IChatsStore => state.chats;

export const getChats = (state: IStore) => getChatsReducer(state).chats;
export const getError = (state: IStore) => getChatsReducer(state).error;
export const getLoading = (state: IStore) => getChatsReducer(state).isLoading;
