import React, {useEffect} from 'react';
import './App.css';
import MessageList from "./сomponents/messageList/MessageList";
import AddMessage from "./сomponents/addMessage/AddMessage";
import {useUsers} from './hooks/useUsers';
import {useMessages} from "./hooks/useMessages";
import {IMessage} from "./types/Message";

function App() {
    // todo: Too many re-renders. React limits the number of renders to prevent an infinite loop. =(
    // const {addUser, firstHuman} = useUsers();
    // addUser({name: 'My name is robot', type: 'robot'})
    // useEffect(() => {
    //     addUser({name: 'My name is robot', type: 'robot'})
    //     addUser({name: 'User name', type: 'human'})
    // });
    const {messages, addMessage } = useMessages();

    return (
        <div className="App">
            <MessageList messages={messages}/>
            <AddMessage onSubmit={addMessage}/>
        </div>
    );
}

export default App;
