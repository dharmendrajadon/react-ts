import * as React from 'react';
import * as Loadable from 'react-loadable';

/**
 * Loading JSX Component
 * @param props LoadingComponentProps
 */
const loading = (props: Loadable.LoadingComponentProps): JSX.Element | null => {

    // If component is loading
    if (props.isLoading) {

        // If component loading timeout
        if (props.timedOut) {
            return <div>Loader timed out!</div>;
        } else if (props.pastDelay) {
            return <div>Loading...</div>;
        } else {
            return null; // tslint:disable-line:no-null-keyword
        }

    } else if (props.error) { // If any loading error occurred
        return <div>Error! Component failed to load</div>;
    } else {
        return null; // tslint:disable-line:no-null-keyword
    }
};

export default loading;
