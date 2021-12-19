import {useCallback, useState} from "react";
import {IChats} from "../types/Chats";
import {nanoid} from "nanoid";

export const useChats = (): {
    chats: IChats[];
    setChats: (chats: IChats[]) => void;
    addChat: () => void;
} => {
    const [chats, setChats] = useState<IChats[]>([]);

    const addChat = useCallback(
        () => {
            setChats((prev) => {
                const chatCopy = [...prev];
                chatCopy.push({
                    id: nanoid(),
                    name: `Chat ${prev.length}`,
                });
                return chatCopy;
            });
        }, [setChats])
    return {
        chats,
        setChats,
        addChat
    }
}
