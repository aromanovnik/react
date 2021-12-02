import {useCallback, useState} from "react";
import {IChats} from "../types/Chats";

export const useChats = (): {
    chats: IChats[];
    addChat: () => void;
} => {
    const [chats, setChats] = useState<IChats[]>([]);

    const addChat = useCallback(
        () => {
            setChats((prev) => {
                const chatCopy = [...prev];
                chatCopy.push({
                    id: (new Date()).getTime().toString(),
                    name: `Chat ${prev.length}`,
                });

                return chatCopy;
            });
        }, [setChats])
    return {
        chats,
        addChat
    }
}
