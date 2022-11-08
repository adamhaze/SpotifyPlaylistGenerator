import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


class CreateAccount extends React.Component 
{
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
          type="name"
          // defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-username"
          label="Username"
          type="username"
          // defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          required
          id="outlined-email-input"
          label="Email"
          type="email"
        />
      </div>
    </Box>
  );
}
}

export default CreateAccount;