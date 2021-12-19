import React, {useEffect, useState} from "react";
import {useMessages} from "../../hooks/useMessages";
import {useChats} from "../../hooks/useChats";
import Chats from "../../сomponents/chats/Chats";
import MessageList from "../../сomponents/messageList/MessageList";
import AddMessage from "../../сomponents/addMessage/AddMessage";
import styles from './Chats.module.css'
import {useParams} from "react-router-dom";
import chatsService from "./../../services/chats";
import {IChats} from "../../types/Chats";

export const Chat = () => {
    const {messages, addMessage} = useMessages();
    const {chats, setChats} = useChats()
    const [chat, setChat] = useState<IChats | undefined>(undefined);
    const {chatId} = useParams();

    // useEffect(() => {
    //     const chats$ = chatsService.chats$.subscribe((chats) => {
    //         setChats(chats);
    //         setChat(chats.find(e => e.id === chatId));
    //     })
    //
    //     return chats$?.unsubscribe();
    // })

    return (
        <div className={styles.Chats}>
            <Chats chats={chats}/>
            {chatId && <div className={styles.right}><MessageList messages={messages}/><AddMessage chatId={chatId} onSubmit={addMessage}/></div>}
            {!chatId && <div className={styles.right}><h2>Choose a chat!</h2></div>}
        </div>
    );
}
