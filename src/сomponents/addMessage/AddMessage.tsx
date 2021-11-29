import styles from './AddMessage.module.css';
import {IMessage} from "../../types/Message";
import {ChangeEvent, FormEvent, useState} from "react";

const AddMessage = ({onSubmit}: { onSubmit: (message: IMessage) => void }) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target?.value ?? '');
        return;
    }

    const addMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit({text: value, author: 'User'});
        setValue('');
    }

    return (
        <form onSubmit={addMessage} className={styles.Form} action="">
            <input className={styles.input} onChange={onChange} value={value} type="text"/>
            <button className={styles.button} type="submit">Send</button>
        </form>
    );
}
export default AddMessage;
