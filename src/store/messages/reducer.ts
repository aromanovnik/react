import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE} from "./actions";
import {IMessageStore} from "../../types/Message";

const initialState: IMessageStore = {
    messages: {},
    error: null,
    isLoading: false,
}

export const messagesReducer = (state = initialState, action: any): IMessageStore => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (!state.messages[action.payload.id]) {
                return state;
            }

            const newMessages = {...state.messages}
            newMessages[action.payload.id] = [
                ...(newMessages[action.payload.id] || []),
                action.payload,
            ]

            return {
                ...state,
                messages: newMessages,
            }
        }
        case EDIT_MESSAGE: {
            if (!state.messages[action.payload.id]) {
                return state;
            }

            const index = state.messages[action.payload.id].findIndex((el) => action.payload.id === el.id);
            if (index < 0) {
                return state;
            }

            const newMessages = {...state.messages}
            newMessages[action.payload.id][index] = {
                ...newMessages[action.payload.id][index],
                ...action.payload,
            }

            return {
                ...state,
                messages: newMessages,
            }
        }
        case DELETE_MESSAGE: {
            if (!state.messages[action.payload]) {
                return state;
            }

            const newMessages = {...state.messages}
            newMessages[action.payload] = newMessages[action.payload].filter((el) => el.id !== action.payload)
            return {
                ...state,
                messages: newMessages,
            }
        }
        default: {
            return state;
        }

    }

}
