import { action } from 'typesafe-actions';
import {
    ActionTypes,
    ILoginRequest,
    ILoginResponse
} from './types';

/**
 * Login Request Action Creator
 * @param loginRequest Login Request  Payload
 */
export const sendLoginRequest = (loginRequest: ILoginRequest) => {
    return action(ActionTypes.SEND_LOGIN_REQUEST, loginRequest);
};

/**
 * On Login Success Action Creator
 * @param loginResponse Login Request  Payload
 */
export const onLoginSuccess = (loginResponse: ILoginResponse) => {
    return action(ActionTypes.ON_LOGIN_SUCCESS, loginResponse);
};

/**
 * On Login Error Action Creator
 * @param message Error Message
 */
export const onLoginError = (message: string) => {
    return action(ActionTypes.ON_LOGIN_ERROR, message);
};
