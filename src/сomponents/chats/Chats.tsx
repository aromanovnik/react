import styles from './Chats.module.css';
import {IChats} from "../../types/Chats";
import {Button, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Chats = ({chats}: { chats: IChats[] }) => {
    return (
        <div  className={styles.Chats}>
            <ListGroup>
                {chats.map(chat => <Link to={'/chat/'+chat.id}><ListGroup.Item key={chat.id}>{chat.name}</ListGroup.Item> </Link>)}
            </ListGroup>
            <Button variant="primary">Create chat</Button>
        </div>
    )
}

export default Chats;
