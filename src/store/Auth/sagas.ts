import { put, takeEvery } from 'redux-saga/effects';
import axios from '../../config/axios';
import { onLoginSuccess, onLoginError } from './actions';
import { ActionTypes } from './types';
import { isValidObject } from '../../shared/Utility';

/**
 * Handle Login Request
 * @param action Login Request Payload
 */
function* handleLoginRequest(action: any) {
    try {

        // Fetch request response from server API
        const response = yield axios.post('/api/auth/login', action.payload);

        // If error
        if (response.error) {
            yield put(onLoginError(response.error));
        } else {

            // Send API response to Login Reducer
            yield put(onLoginSuccess(response));
        }
    } catch (error) {

        // If HTTP error, send error to reducer
        if (isValidObject(error.response)
            && isValidObject(error.response.data)
            && isValidObject(error.response.data.errors)
            && error.response.data.errors instanceof Array) {

            yield put(onLoginError(error.response.data.errors));
        } else {

            // Send Custom Message to Login Reducer
            yield put(onLoginError('Unknown Error Occurred'));
        }
    }
}

/**
 * Watch Action Types
 */
function* watchLogin() {

    // Pass every action of type {SEND_LOGIN_REQUEST} to handler
    yield takeEvery(ActionTypes.SEND_LOGIN_REQUEST, handleLoginRequest);
}

export default watchLogin;