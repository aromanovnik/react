export interface IChat {
    id: string;
    name: string;
}

export interface IChatsStore {
    chats: IChat[];
    error: null | string;
    isLoading: boolean;
}
