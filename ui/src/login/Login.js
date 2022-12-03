import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import BackgroundImage from "../components/BackgroundImage";
import CenterImage from "../components/CenterImage";
import { validateLogin } from "../RouteController";
import { RoutingWrapper } from "../services/RoutingWrapper";


class Login extends React.Component {
    constructor(props){
        super(props)
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            username: "",
            password: "",
            error: false
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    routeChange = () => {
        this.props.navigate('/home', {state: {username: this.state.username, password: this.state.password}});
        // this.props.navigate('/home', {replace: true});
    }

    handleSubmit = () => {
        const validate = async () => {
            const response = await validateLogin(this.state);
            if (!response) {
                this.setState({error: true});
                return null;
            } else {
                this.setState({error: false});
                console.log('successful login');
                this.routeChange();
            }
        }
        validate();
    }

    render() {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <CenterImage/>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "50ch", display: "flex", background: "rgb(232, 241, 250)" }
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <div>
                    <TextField
                        required
                        label="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                        error={this.state.error}
                        helperText={this.state.error ? 'invalid login credentials' : ''}
                    />
                    <TextField
                        required
                        label="Password"
                        name="password"
                        type="password"
                        error={this.state.error}
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button variant="contained" onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </div>
                    {/* {this.state.s && <Navigate to="/home" state={this.state}/>} */}
                </Box>
            </React.Fragment>
        )
    }


}

export default RoutingWrapper(Login);