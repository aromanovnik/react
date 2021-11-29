import {IUser} from "./User";

export interface IMessage {
    id?: string;
    text: string;
    // author: IUser;
    author: string | 'robot';
}
