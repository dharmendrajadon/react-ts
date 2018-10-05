import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
// Redux middleware which connects to our `react-router` instance
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
// For react-router, pass your history type.
import { History } from 'history';

// Import Initial State, Combined Reducers & Combined Sagas
import { IApplicationState, rootReducer, rootSaga } from './StoreRoot';

/**
 * Store Reducer/Saga Configurations and Combiners
 * @param history Browser History
 * @param initialState Initial Application State
 */
const config = (history: History, initialState: IApplicationState): Store<IApplicationState> => {

    // For Redux debugging tool
    const composeEnhancers = composeWithDevTools({});

    // Initialize redux-saga middleware
    const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

    // Create centralized root store and attach reducers and sagas together
    const rootStore = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );

    // Start listening for action types in saga middleware
    sagaMiddleware.run(rootSaga);

    // Return centralized store
    return rootStore;
};

export default config;
