import {useCallback, useState} from "react";
import {IChats} from "../types/Chats";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../store/chats/selectors";
import {createChat} from "../store/chats/actions";

export const useChats = (): {
    chats: IChats[];
    // setChats: (chats: IChats[]) => void;
    addChat: (chat: IChats) => void;
} => {
    const dispatch = useDispatch();

    // const [chats, setChats] = useState<IChats[]>([]);
    const chats = useSelector(getChats)

    const addChat = (chat: IChats) => {
        dispatch(createChat({
            ...chat,
            id: nanoid(),
        }))
    }


    // const addChat = useCallback(
    //     () => {
    //         setChats((prev) => {
    //             const chatCopy = [...prev];
    //             chatCopy.push({
    //                 id: nanoid(),
    //                 name: `Chat ${prev.length}`,
    //             });
    //             return chatCopy;
    //         });
    //     }, [setChats])
    return {
        chats,
        // setChats,
        addChat,
    }
}
