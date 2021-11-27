import styles from './Message.module.css';

const Message = ({text}: { text: string }) => (
    <div className={styles.Message}>
        {text}
    </div>
)
export default Message;
