import {IChats} from "../../types/Chats";

export const CREATE_CHAT = '[CHATS PAGE] CREATE CHAT';
export const EDIT_CHAT = '[CHATS PAGE] EDIT CHAT';
export const DELETE_CHAT = '[CHATS PAGE] DELETE CHAT';

export const createChat = (chat: IChats): { type: string; payload: IChats } => {
    return {
        type: CREATE_CHAT,
        payload: chat,
    }
}

export const editChat = (chat: IChats): { type: string; payload: IChats } => {
    return {
        type: EDIT_CHAT,
        payload: chat,
    }
}
export const deleteChat = (chatId: IChats["id"]): { type: string; payload: IChats["id"] } => {
    return {
        type: DELETE_CHAT,
        payload: chatId,
    }
}
