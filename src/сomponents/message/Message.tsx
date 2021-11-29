import styles from './Message.module.css';
import {IMessage} from "../../types/Message";

const Message = ({message}: { message: IMessage }) => (
    <div className={styles.Message}
         style={(message.author === 'robot' ? {margin: '10px auto 10px 10px'} : undefined)}>
        <span className={styles.author}>{message.author}</span>
        {message.text}
    </div>
)
export default Message;
