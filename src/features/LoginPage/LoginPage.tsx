import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState, IConnectedReduxProps } from '../../store/StoreRoot';
import { sendLoginRequest } from '../../store/Auth/actions';
import { ILoginRequest } from '../../store/Auth/types';

// Separate props from state
interface IPropsFromState {
    errors: string[] | undefined;
    isLoading: boolean;
}

// Separate props from dispatch
interface IPropsFromDispatch {
    sendLoginRequest: typeof sendLoginRequest;
}

// Create an intersection type of component props and state props
type AllProps = IPropsFromState & IPropsFromDispatch & IConnectedReduxProps;

class LoginPage extends React.Component<AllProps> {

    public componentDidMount() {
        this.props.sendLoginRequest({ email: '', password: '' });
    }

    public onLoginSubmit() {
        // Do
    }

    public render() {
        const { errors } = this.props;
        console.log(errors);

        return (
            <div>Login Page</div>
        );
    }
}

const mapStateToProps = ({ auth }: IApplicationState) => ({
    errors: auth.errors,
    isLoading: auth.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendLoginRequest: (loginRequest: ILoginRequest) => dispatch(sendLoginRequest(loginRequest))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);