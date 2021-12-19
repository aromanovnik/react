import {IMessage} from "../../types/Message";

export const ADD_MESSAGE = '[CHAT PAGE] ADD MESSAGE';
export const EDIT_MESSAGE = '[CHAT PAGE] EDIT MESSAGE';
export const DELETE_MESSAGE = '[CHAT PAGE] DELETE MESSAGE';

export const addMessage = (message: IMessage): { type: string; payload: IMessage } => {
    return {
        type: ADD_MESSAGE,
        payload: message,
    }
}

export const editMessage = (message: IMessage): { type: string; payload: IMessage } => {
    return {
        type: EDIT_MESSAGE,
        payload: message,
    }
}

export const deleteMessage = (messageId: IMessage["id"]): { type: string; payload: IMessage["id"] } => {
    return {
        type: DELETE_MESSAGE,
        payload: messageId,
    }
}
