import {useEffect} from 'react';
import {IMessage, IMessages} from "../types/Message";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../store/messages/selectors";
import * as Actions from "../store/messages/actions";
import {nanoid} from "nanoid";

export const useMessages = (): {
    messages: IMessages,
    addMessage: (message: IMessage) => void;
    editMessage: (message: IMessage) => void;
    deleteMessage: (messageId: string) => void;
} => {
    const dispatch = useDispatch();
    // const messages = useSelector((state: IStore) => getMessages(state, chatId));
    const messages = useSelector(getMessages);

    const addMessage = (mess: IMessage) => {
        dispatch(Actions.addMessage({
            id: nanoid(),
            ...mess,
        }))
    }

    const editMessage = (chat: IMessage): void => {
        dispatch(Actions.editMessage(chat))
    }

    const deleteMessage = (messageId: string): void => {
        dispatch(Actions.deleteMessage(messageId))
    }


    // Robot response
    useEffect(() => {
        let mess: IMessage[] = [];
       Object.values(messages).forEach(el => {
           mess = [
               ...mess,
               ...el,
           ]
        });
        // console.log(_messages, messages);
        if (!mess.length || mess[mess.length - 1]?.author === 'robot') {
            return;
        }
        const timerId = setTimeout(() => {
            addMessage({
                text: 'Hi 👋! My name is robot.',
                author: 'robot',
                chatId: mess[mess.length - 1].chatId,
            });
        }, 1500);

        return () => {
            clearTimeout(timerId);
        };
    }, [messages])


    return {
        messages,
        addMessage,
        editMessage,
        deleteMessage,
    }
}
