import styles from './Chats.module.css';
import {IChats} from "../../types/Chats";
import {ListGroup} from "react-bootstrap";

const Chats = ({chats}: { chats: IChats[] }) => {
    return (
        <ListGroup className={styles.Chats}>
            {chats.map(chat => <ListGroup.Item key={chat.id}>{chat.name}</ListGroup.Item>)}
        </ListGroup>
    )
}

export default Chats;
