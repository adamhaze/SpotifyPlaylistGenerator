import * as React from "react";
import TextField from "@mui/material/TextField";

export default function SearchBar({handleChange}) {
    return (
        <TextField 
            id="outlined-basic" 
            label="Search For Song" 
            variant="outlined" 
            name="songCurrent"
            onChange={handleChange}
            sx={{ 
                width: "50ch", 
                display: "flex",
                justifySelf: "center",
                alignContent: "center",
                background: "rgb(232, 241, 250)",
                ml: "auto",
                mr: "auto",
                mt: 10,
                border: 1,
                borderColor: "rgb(232, 241, 250)"
            }}
        />
    )
}