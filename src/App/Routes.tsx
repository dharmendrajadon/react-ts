import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import Wrapper from '../hoc/Wrapper/Wrapper';

// Loading Component
import Loading from '../hoc/Loading/Loading';

/**
 * Async Loading For Components
 */

// Not Found Error Page
const AsyncNotFound = Loadable(
    {
        loader: () => import('../components/Errors/NotFound/NotFound'),
        loading: Loading
    }
);

// Login Page
const AsyncLogin = Loadable(
    {
        loader: () => import('../features/LoginPage/LoginPage'),
        loading: Loading
    }
);

// Application Routes
const Routes: React.SFC = () => (
    <Wrapper>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={AsyncLogin} />
                <Route component={AsyncNotFound} />
            </Switch>
        </BrowserRouter>
    </Wrapper>
);

export default Routes;
