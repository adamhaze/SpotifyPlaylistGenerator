import * as React from "react";
import { RoutingWrapper } from "../services/RoutingWrapper";
import BackgroundImage from "../components/BackgroundImage";


class AccountInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            username: this.props.location.state.username,
            password: this.props.location.state.password,
        }
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div style={{textAlign: 'center'}}>
                    <h1>Account Info Page</h1>
                </div>
            </React.Fragment>
        )
    }
}


export default RoutingWrapper(AccountInfo);


