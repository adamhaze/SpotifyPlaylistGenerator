import * as React from "react";
import Button from '@mui/material/Button';
import BackgroundImage from "../components/BackgroundImage";
// import CenterImage from "../components/CenterImage";
import SearchBar from "../components/SearchBar";
import "./UserHomePage.css";


class UserHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            error: false,
            songCurrent: ""
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    handleSubmit() {
        console.log(this.state);
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div>
                    <h1 className="header-text">User Home Page</h1>
                </div>
                <SearchBar handleChange={this.handleChange.bind(this)}/>
                <Button variant="contained"
                    sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
                    onClick={this.handleSubmit.bind(this)}>Search</Button>
            </React.Fragment>
        )
    }
}

export default UserHomePage;