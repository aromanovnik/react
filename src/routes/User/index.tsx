import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SWITCH_CHECKBOX} from "../../store/user/actions";

export const User = () => {
    const dispatch = useDispatch();
    const checkbox = useSelector<any>((state) => state.checkbox) as boolean;

    const onChangeInput = (event: any) => {
        dispatch({type: SWITCH_CHECKBOX, payload: event.target.checked})
    }

    return (
        <div>
            <h1>User</h1>
            <input type='checkbox' checked={checkbox} onChange={onChangeInput}/>
        </div>
    )
}
