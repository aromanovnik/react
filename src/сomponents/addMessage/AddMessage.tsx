import styles from './AddMessage.module.css';
import {IMessage} from "../../types/Message";

const AddMessage = ({onSubmit}: { onSubmit: (message: IMessage) => void }) => {
    return (
        <form className={styles.Form} action="">
            <input className={styles.input} type="text"/>
            <button className={styles.button} type="submit">Send</button>
        </form>
    );
}
export default AddMessage;
