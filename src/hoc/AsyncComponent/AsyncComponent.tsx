import * as React from 'react';

interface IAsyncComponentState {
    Component: any;
}

/**
 * Load Component Asynchronously
 * @param getAsyncComponent component of any type
 */
const asyncComponent = (getAsyncComponent: any): any => {

    return class AsyncComponent extends React.Component<{}, IAsyncComponentState> {

        // Create constructor and pass all values as received
        constructor(props: any) {
            super(props);

            this.state = {
                Component: null // tslint:disable-line:no-null-keyword
            };
        }

        public async componentDidMount() {
            const { default: Component } = await getAsyncComponent();

            this.setState({
                Component
            });
        }

        public render() {
            const C = this.state.Component;

            // Return Component or loading flag
            return C ? <C {...this.props} /> : <div>...Loading</div>;
        }
    };
};

export default asyncComponent;