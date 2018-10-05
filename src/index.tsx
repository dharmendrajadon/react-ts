import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

// Main Application Entry Point
import App from './App/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Centralized Store Configurations
import CentralizedStore from './store/Config';

// CSS Main Styles
import './index.css';

// Using Browser History
const history = createBrowserHistory();

// Initial Redux state
const initialState = (window as any).initialReduxState;

// Centralized Store Initialization
const store = CentralizedStore(history, initialState);

// Main Application Entry Point
const app: JSX.Element = <App store={store} history={history} />;

// Render Initial App React DOM
ReactDOM.render(app, document.getElementById('root') as HTMLElement
);

// Register Service Worker
registerServiceWorker();
