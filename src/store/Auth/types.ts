// Action Types
export const enum ActionTypes {
    SEND_LOGIN_REQUEST = '@@login/SEND_LOGIN_REQUEST',
    ON_LOGIN_SUCCESS = '@@login/ON_LOGIN_SUCCESS',
    ON_LOGIN_ERROR = '@@login/ON_LOGIN_ERROR'
}

// Schemas Here

/**
 * Auth State Object
 */
export interface IAuthState {
    readonly errors?: string[];
    readonly isLoading: boolean;
    readonly token: string;
    readonly user: IUser;
}

/**
 * Login Request
 */
export interface ILoginRequest {
    email: string;
    password: string;
}

/**
 * User Object
 */
export interface IUser {
    birthday: string;
    email: string;
    firstName: string;
    gender: string;
    id: string;
    lastName: string;
}

/**
 * Login Response
 */
export interface ILoginResponse {
    token: string;
    user: IUser;
}
