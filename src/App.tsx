import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import MessageList from "./сomponents/messageList/MessageList";
import AddMessage from "./сomponents/addMessage/AddMessage";
import Chats from "./сomponents/chats/Chats";
import {useMessages} from "./hooks/useMessages";
import {useChats} from "./hooks/useChats";

function App() {
    const {messages, addMessage} = useMessages();
    const {chats, addChat} = useChats()

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            addChat();
        }
    }, []);

    return (
        <div className={styles.App}>
            <Chats chats={chats}/>
            <div className={styles.right}>
                <MessageList messages={messages}/>
                <AddMessage onSubmit={addMessage}/>
            </div>
        </div>
    );
}

export default App;
