import {IStore} from "../../types/Store";
import {IChatsStore} from "../../types/Chats";

const getChatsReducer = (state: IStore): IChatsStore => state.chats;

const getChats = (state: IStore) => getChatsReducer(state).chats;
const getError = (state: IStore) => getChatsReducer(state).error;
const getLoading = (state: IStore) => getChatsReducer(state).isLoading;
