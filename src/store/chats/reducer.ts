import {IChat, IChatsStore} from "./models";
import {ADD_CHAT, DELETE_CHAT, EDIT_CHAT} from "./actions";

const initialState: IChatsStore = {
    chats: [],
    error: null,
    isLoading: false,
}

export const chatsReducer = (state = initialState, action: any): IChatsStore => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        }
        case EDIT_CHAT: {
            const index = state.chats.findIndex((el) => action.payload.id);
            if (index < 0) {
                return state;
            }

            const newState = state;
            newState.chats[index] = {
                ...newState.chats[index],
                ...action.payload,
            }

            return newState
        }
        case DELETE_CHAT: {
            const newChats = state.chats.filter((el) => el.id !== action.payload)
            return {
                ...state,
                chats: newChats,
            }
        }
        default: {
            return state;
        }

    }

}
