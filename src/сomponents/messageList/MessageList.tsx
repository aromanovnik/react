import styles from './MessageList.module.css';
import Message from "../message/Message";
import {IMessage} from "../../types/Message";

const MessageList = ({messages}: { messages: IMessage[] }) => {
    return (
        <div className={styles.MessageList}>
            {messages.map((m) => <Message text={m.text}/>)}
        </div>
    )
}

export default MessageList;
