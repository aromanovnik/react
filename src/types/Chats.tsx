export interface IChats {
    id: string;
    name: string;
}

export interface IChatsStore {
    chats: IChats[];
    error: null | string;
    isLoading: boolean;
}