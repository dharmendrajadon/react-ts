import * as React from 'react';
import { Store } from 'redux';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

// Application State
import { IApplicationState } from '../store/StoreRoot';

// Applications Routes
import Routes from './Routes';

// Separate props from state
interface IPropsFromState {
  authToken: string;
}

// Separate props from dispatch
interface IPropsFromDispatch {
  [key: string]: any;
}

// Any additional component props go here
interface IOwnProps {
  store: Store<IApplicationState>;
  history: History;
}

// Create an intersection type of component props and state props
type AllProps = IPropsFromState & IPropsFromDispatch & IOwnProps;

// Main Application entry point component
class App extends React.Component<AllProps> {

  public render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

/**
 * Map state to props
 */
const mapStateToProps = ({ auth }: IApplicationState) => ({
  authToken: auth.token
});

// Export Default App Object with redux container
export default connect<IPropsFromState, IPropsFromDispatch, IOwnProps, IApplicationState>(
  mapStateToProps
)(App);
