import React, {useEffect} from "react";
import {useMessages} from "../../hooks/useMessages";
import {useChats} from "../../hooks/useChats";
import Chats from "../../сomponents/chats/Chats";
import MessageList from "../../сomponents/messageList/MessageList";
import AddMessage from "../../сomponents/addMessage/AddMessage";
import styles from './Chats.module.css'

export const Chat = () => {
    const {messages, addMessage} = useMessages();
    const {chats, addChat} = useChats()

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            addChat();
        }
    }, []);

    return (
        <div className={styles.Chats}>
            <Chats chats={chats}/>
            <div className={styles.right}>
                <MessageList messages={messages}/>
                <AddMessage onSubmit={addMessage}/>
            </div>
        </div>
    );
}