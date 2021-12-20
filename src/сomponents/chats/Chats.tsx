import styles from './Chats.module.css';
import {IChats} from "../../types/Chats";
import {Button, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ChangeEvent, useState} from "react";

const Chats = ({chats, addChat}: { chats: IChats[], addChat: (chat: IChats) => void }) => {
    const [nameChat, setNameChat] = useState('');

    const createChat = () => {
        if (!nameChat.trim()) {
            return;
        }

        addChat({name: nameChat})
        setNameChat('');
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setNameChat(event.target?.value ?? '');
        return;
    }

    return (
        <div className={styles.Chats}>
            <ListGroup>
                {chats.map(chat => <Link to={'/chat/' + chat.id} key={chat.id}><ListGroup.Item
                    key={chat.id}>{chat.name}</ListGroup.Item> </Link>)}
            </ListGroup>

            <div>
                <input type="text"
                       onChange={onChange}
                       value={nameChat}/>
                <br/>
                <Button variant="primary" onClick={createChat}>Create chat</Button>
            </div>

        </div>
    )
}

export default Chats;
