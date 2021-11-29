import {useCallback, useMemo, useState} from 'react';
import {IUser} from "../types/User";


export const useUsers = (): {
    users: IUser[];
    firstHuman: IUser | undefined;
    addUser: (user: IUser) => void;
    removeUser: (name: string) => () => void;
} => {
    const [users, setUser] = useState<IUser[]>([]);

    const addUser = useCallback((user: IUser) => {
        setUser((state) => {
            const copyState = [...state];
            copyState.push({
                id: (new Date()).getTime().toString(),
                ...user,
            })
            console.log(copyState)
            return copyState;
        })
    }, []);


    const firstHuman = useMemo<IUser | undefined>(() => users.find(u => u.type === 'human'), [users])


    const removeUser = useCallback((name: string) => () => {
        setUser((state) => state.filter(i => i.name !== name))
    }, []);


    return {
        users,
        firstHuman,
        addUser,
        removeUser,
    }
}
