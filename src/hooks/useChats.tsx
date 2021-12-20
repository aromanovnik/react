import {IChats} from "../types/Chats";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../store/chats/selectors";
import * as Actions from "../store/chats/actions";

export const useChats = (): {
    chats: IChats[];
    addChat: (chat: IChats) => void;
    editChat: (chat: IChats) => void;
    deleteChat: (chatId: string) => void;
} => {
    const dispatch = useDispatch();
    const chats = useSelector(getChats)

    const addChat = (chat: IChats): void => {
        dispatch(Actions.createChat({
            ...chat,
            id: nanoid(),
        }))
    }

    const editChat = (chat: IChats): void => {
        dispatch(Actions.editChat(chat))
    }

    const deleteChat = (chatId: string): void => {
        dispatch(Actions.deleteChat(chatId))
    }

    return {
        chats,
        addChat,
        editChat,
        deleteChat,
    }
}
