import {IStore} from "../../types/Store";
import {IMessageStore} from "../../types/Message";

export const getChatsReducer = (state: IStore): IMessageStore => state.messages;

export const getMessages = (state: IStore, id: string) => getChatsReducer(state).messages[id];
export const getError = (state: IStore) => getChatsReducer(state).error;
export const getLoading = (state: IStore) => getChatsReducer(state).isLoading;
