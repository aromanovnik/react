import styles from './Chats.module.css';
import {IChats} from "../../types/Chats";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Chats = ({chats}: { chats: IChats[] }) => {
    return (
        <ListGroup className={styles.Chats}>
            {chats.map(chat => <Link to={'/chat/'+chat.id}><ListGroup.Item key={chat.id}>{chat.name}</ListGroup.Item> </Link>)}
        </ListGroup>
    )
}

export default Chats;
