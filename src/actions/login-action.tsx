import axios from 'axios';
import {LOGIN_SUCCESS} from "./types";
import {LOGIN_FAILURE} from "./types";

export const login = ({ username, password } : {username: any, password: any}) => {
    return (dispatch: any) => {
        axios
            .post(
                `http://localhost:3001/api/auth/login`,
                {
                    username,
                    password,
                }).then(res => {
            dispatch(loginSuccess(res.data));
        })
            .catch(err => {
                dispatch(loginFailure(err.message));
            });
    };
};

const loginSuccess = (user: any) => ({
    type: LOGIN_SUCCESS,
    payload: {
        ...user
    }
});

const loginFailure = (error: Error) => ({
    type: LOGIN_FAILURE,
    payload: {
        error
    }
});