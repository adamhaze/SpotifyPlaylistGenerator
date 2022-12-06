import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {createUser} from "../RouteController";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import BackgroundImage from "../components/BackgroundImage";
import CenterImage from "../components/CenterImage";
import { RoutingWrapper } from "../services/RoutingWrapper";

// Pattern: Model View Controller (MVC)
// Element: VIEW
// visual representation of a create account interface


class CreateAccount extends React.Component 
{
  constructor(props) {
    super(props)
    this.state = {
        name: "",
        username: "",
        password: "",
        email: "",
        error: false
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  routeChange = () => {
    this.props.navigate('/home', {state: {username: this.state.username, password: this.state.password}});
  }

  handleSubmit () {
    const validate = async () => {
      const response = await createUser(this.state);
      if (!response) {
        console.log('Setting error state');
        this.setState({
          name: "",
          username: "",
          password: "",
          email: "",
          error: true}, () => {console.log(this.state)});

        // return null;
      } else {
          // route to home page
          this.setState({error: false});
          console.log('created account successfully');
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
          id="outlined-name"
          label="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        <TextField
          required
          id="outlined-username"
          label="Username"
          type="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          // defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange.bind(this)}
        />
        <TextField
          required
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange.bind(this)}
        />
      <Button variant="contained" onClick={this.handleSubmit.bind(this)}>Create Account</Button>

      {this.state.error ? <Alert severity="error" variant="filled">There is already an account with this email address</Alert> : <></>}
      </div>
    </Box>
    </React.Fragment>
  );
}
}

export default RoutingWrapper(CreateAccount);