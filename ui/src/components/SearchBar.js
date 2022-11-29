import * as React from "react";
import TextField from "@mui/material/TextField";

export default function SearchBar(props) {
    return (
        <TextField 
            id="outlined-basic" 
            label="Search For Song" 
            variant="outlined" 
            name="songCurrent"
            value={props.songCurrent}
            onChange={props.handleChange}
            error={props.error}
            helperText={props.error ? 'Did not recognize that song title...' : ''}
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