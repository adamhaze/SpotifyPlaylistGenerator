import * as React from "react";
import Button from '@mui/material/Button';
import "./UserHomePage.css";
import BackgroundImage from "../components/BackgroundImage";
// import CenterImage from "../components/CenterImage";
import SearchBar from "../components/SearchBar";
import DropdownList from "../components/DropdownList";
import { getRelatedSongs } from "../RouteController";


class UserHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            error: false,
            songCurrent: "",
            suggestedSongs: []
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    handleSubmit() {
        const related = async () => {
            const response = await getRelatedSongs(this.state.songCurrent);
            if (!response) {
                this.setState({error: true});
            } else {
                this.setState({error: false, suggestedSongs: response});
                console.log(response);
            }
        }
        // console.log(this.state);
        related();
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div>
                    <h1 className="header-text">User Home Page</h1>
                </div>
                <SearchBar handleChange={this.handleChange.bind(this)} error={this.state.error}/>
                <Button variant="contained"
                    sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
                    onClick={this.handleSubmit.bind(this)}>Search</Button>
                {this.state.suggestedSongs.length > 0 && 
                    <DropdownList suggestedSongs={this.state.suggestedSongs}/>
                }
            </React.Fragment>
        )
    }
}

export default UserHomePage;