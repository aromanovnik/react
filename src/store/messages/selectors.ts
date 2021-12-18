import {IStore} from "../../types/Store";
import {IMessageStore} from "../../types/Message";

const getChatsReducer = (state: IStore): IMessageStore => state.messages;

const getMessages = (state: IStore, id: string) => getChatsReducer(state).messages[id];
const getError = (state: IStore) => getChatsReducer(state).error;
const getLoading = (state: IStore) => getChatsReducer(state).isLoading;
