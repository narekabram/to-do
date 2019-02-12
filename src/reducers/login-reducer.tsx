import {LOGIN_SUCCESS} from "../actions/types";
import {LOGIN_FAILURE} from "../actions/types";

export default (state = {}, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILURE:
            return action.payload.error;
        default:
            return state
    }
}