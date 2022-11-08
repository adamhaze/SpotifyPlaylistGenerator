import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import {createUser} from "../RouteController";


class CreateAccount extends React.Component 
{
  constructor(props) {
    super(props)
    this.state = {
        name: "",
        username: "",
        password: "",
        email: ""
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }


  render() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch", display: "flex" }
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
      </div>
    </Box>
  );
}
}

export default CreateAccount;