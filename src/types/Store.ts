import {IChatsStore} from "./Chats";
import {IMessageStore} from "./Message";

export interface IStore {
    user: any;
    chats: IChatsStore;
    messages: IMessageStore;
}