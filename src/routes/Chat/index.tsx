import React from "react";
import {useMessages} from "../../hooks/useMessages";
import {useChats} from "../../hooks/useChats";
import Chats from "../../сomponents/chats/Chats";
import MessageList from "../../сomponents/messageList/MessageList";
import AddMessage from "../../сomponents/addMessage/AddMessage";
import styles from './Chats.module.css'
import {useParams} from "react-router-dom";
import {IMessage} from "../../types/Message";

export const Chat = () => {
    const {chats, addChat} = useChats()
    const {chatId} = useParams();

    const {messages, addMessage} = useMessages();


    return (
        <div className={styles.Chats}>
            <Chats chats={chats} addChat={addChat}/>
            {chatId &&
                <div className={styles.right}><MessageList messages={messages[chatId] ?? []}/>
                    <AddMessage chatId={chatId} onSubmit={addMessage}/>
                </div>
            }
            {!chatId && <div className={styles.right}><h2>Choose a chat!</h2></div>}
        </div>
    );
}
