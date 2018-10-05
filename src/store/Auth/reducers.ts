import { Reducer } from 'redux';
import { IAuthState, ActionTypes } from './types';

// Initial State
export const initialState: IAuthState = {
    errors: undefined,
    isLoading: false,
    token: '',
    user: {
        birthday: '',
        email: '',
        firstName: '',
        gender: '',
        id: '',
        lastName: ''
    }
};

/**
 * Auth Reducer
 * @param state Initial Reducer State
 * @param action Redux Action
 */
const reducer: Reducer<IAuthState> = (state: IAuthState = initialState, action) => {

    // For every Action Type {action.type} From Redux Action
    switch (action.type) {
        case ActionTypes.SEND_LOGIN_REQUEST: return {
            ...state,
            isLoading: true
        };

        case ActionTypes.ON_LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user
        };

        case ActionTypes.ON_LOGIN_ERROR: return {
            ...state,
            errors: action.payload,
            isLoading: false
        };

        default: return state;
    }
};

export default reducer;