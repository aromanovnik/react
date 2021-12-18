import {IUser} from "./User";

export interface IMessage {
    id?: string;
    text: string;
    // author: IUser;
    author: string | 'robot';
}

export interface IMessages {
    [key: string]: IMessage[];
}

export interface IMessageStore {
    messages: IMessages;
    error: null | string;
    isLoading: boolean;
}
