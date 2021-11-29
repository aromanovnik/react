import {useCallback, useEffect, useState} from 'react';
import {IMessage} from "../types/Message";

export const useMessages = (): {
    messages: IMessage[],
    addMessage: (message: IMessage) => void;
    removeMessage: (id: string) => () => void;
} => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    const addMessage = useCallback((message: IMessage) => {
        setMessages((state) => {
            const copyState = [...state];
            copyState.push({
                id: (new Date()).getTime().toString(),
                ...message,
            })
            return copyState;
        })
    }, []);


    const removeMessage = useCallback((id: string) => () => {
        setMessages((state) => state.filter(m => m.id !== id))
    }, []);

    // Robot response
    useEffect(() => {
        if (!messages.length || messages[messages.length - 1]?.author === 'robot') {
            return;
        }
        const timerId = setTimeout(() => {
            addMessage({
                text: 'Hi 👋! My name is robot.',
                author: 'robot',
            });
        }, 1500);

        return () => {
            clearTimeout(timerId);
        };
    }, [messages, addMessage])


    return {
        messages,
        addMessage,
        removeMessage,
    }
}
