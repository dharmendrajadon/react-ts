import { combineReducers, Reducer, Action, Dispatch, AnyAction } from 'redux';
import { all, fork, AllEffect } from 'redux-saga/effects';
import { IAuthState } from './Auth/types';
import loginReducer from './Auth/reducers';
import loginSaga from './Auth/sagas';

/**
 * Create a application level state object
 */
export interface IApplicationState {
    auth: IAuthState;
}

/**
 * Additional props for connected React components.
 * This prop is passed by default with `connect()`
 */
export interface IConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

/**
 * Create root reducer having all reducers available in state
 */
export const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers<IApplicationState>({
    auth: loginReducer
});

/**
 * Create root saga having all saga middleware
 * We use {fork} to execute all tasks in background
 */
export function* rootSaga(): IterableIterator<AllEffect> {
    yield all([
        fork(loginSaga)
    ]);
}