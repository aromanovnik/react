import {IChat} from "./models";

export const ADD_CHAT = '[CHATS PAGE] ADD CHAT';
export const EDIT_CHAT = '[CHATS PAGE] EDIT CHAT';
export const DELETE_CHAT = '[CHATS PAGE] DELETE CHAT';

export const createChat = (chat: IChat): { type: string; payload: IChat } => {
    return {
        type: ADD_CHAT,
        payload: chat,
    }
}

export const editChat = (chat: IChat): { type: string; payload: IChat } => {
    return {
        type: EDIT_CHAT,
        payload: chat,
    }
}
export const deleteChat = (chatId: IChat["id"]): { type: string; payload: IChat["id"] } => {
    return {
        type: DELETE_CHAT,
        payload: chatId,
    }
}
