import styles from './AddMessage.module.css';
import {IMessage} from "../../types/Message";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {Button, Form, Stack} from "react-bootstrap";

const AddMessage = ({onSubmit, chatId}: { onSubmit: (message: IMessage) => void; chatId: string; }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!value.length) {
            inputRef.current?.focus();
        }
    }, [value, inputRef])


    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target?.value ?? '');
        return;
    }

    const addMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit({text: value, author: 'User', chadId: chatId});
        setValue('');
    }

    return (
        <Form onSubmit={addMessage} className={styles.Form}>
            <Stack direction="horizontal" gap={2}>
                <Form.Control className="me-auto"
                              placeholder="Write a message..."
                              onChange={onChange}
                              value={value}
                              type="text"
                              ref={inputRef}/>
                <Button variant="secondary" type="submit">Submit</Button>
            </Stack>
        </Form>
        // <form onSubmit={addMessage} className={styles.Form} action="">
        //     <input className={styles.input} onChange={onChange} value={value} type="text"/>
        //     <button className={styles.button} type="submit">Send</button>
        // </form>
    );
}
export default AddMessage;
