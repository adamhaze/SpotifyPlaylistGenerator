import * as React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import "./SplashPage.css"



class SplashPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <Typography color="black" align="center" variant="h1" marked="center" sx={{mt: 25, fontWeight: 'bold', fontSize: 100, letterSpacing: -5, fontFamily:'Copperplate', fontVariant: 'small-caps'}}>
                    Spotify Playlist Generator
                </Typography>
                <div className="btn-wrapper">
                    <Button variant="contained" href="/login">Login</Button>
                </div>

                <div className="btn-wrapper">
                    <Button variant="contained" href="/register">Create Account</Button>
                </div>



            </React.Fragment>
        )
    }
}

export default SplashPage;