import {REGISTER_SUCCESS} from "../actions/types";
import {REGISTER_FAILURE} from "../actions/types";

export default (state = {}, action: any) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return action.payload;
        case REGISTER_FAILURE:
            return action.payload.error;
        default:
            return state
    }
}