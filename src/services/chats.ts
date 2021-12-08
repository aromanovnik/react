import {BehaviorSubject, Observable} from "rxjs";
import {IChats} from "../types/Chats";

export class ChatsService {
    private readonly subject = new BehaviorSubject<IChats[]>([]);

    public chats$: Observable<IChats[]> = this.subject.asObservable();

    addChat(): void {
        console.log('asdasd')
        this.subject.next([
            ...this.subject.value,
            {
                id: (new Date()).getTime().toString() + this.subject.value.length,
                name: `Chat ${this.subject.value.length}`,
            }
        ]);
    }
}

// Only one
export default new ChatsService();
