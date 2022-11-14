import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import BackgroundImage from "../components/BackgroundImage";
import CenterImage from "../components/CenterImage";

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    handleSubmit () {
        console.log(this.state)
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
                    />
                    <TextField
                        required
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button variant="contained" onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </div>
                </Box>
            </React.Fragment>
        )
    }


}

export default Login;