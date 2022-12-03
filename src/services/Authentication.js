import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '~/redux/authenticationSlide';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        await fetch(`http://localhost:8080/api/v1/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                dispatch(loginSuccess(result));
                navigate('/signup');
            });
    } catch (error) {
        dispatch(loginFailure());
    }
};
