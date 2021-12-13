import {SWITCH_CHECKBOX} from "./actions";

const initialState = {
    checkbox: false,
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SWITCH_CHECKBOX: {
            return {
                ...state,
                checkbox: action.payload,
            }
        }
        default: {
            return state;
        }

    }

}
