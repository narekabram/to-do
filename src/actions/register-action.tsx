import axios from 'axios';
import {REGISTER_SUCCESS} from "./types";
import {REGISTER_FAILURE} from "./types";

export const register = ({ username, password } : {username: any, password: any}) => {
    return (dispatch: any) => {
        axios
            .post(
                `http://localhost:3001/api/auth/register`,
                {
                username,
                password,
            }).then(res => {
                dispatch(registerSuccess(res.data));
            })
            .catch(err => {
                dispatch(registerFailure(err.message));
            });
    };
};

const registerSuccess = (user: any) => ({
    type: REGISTER_SUCCESS,
    payload: {
        ...user
    }
});

const registerFailure = (error: Error) => ({
    type: REGISTER_FAILURE,
    payload: {
        error
    }
});