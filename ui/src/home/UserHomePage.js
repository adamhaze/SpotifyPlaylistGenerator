import * as React from "react";
import Button from '@mui/material/Button';
import "./UserHomePage.css";
import BackgroundImage from "../components/BackgroundImage";
// import CenterImage from "../components/CenterImage";
import SearchBar from "../components/SearchBar";
import DropdownList from "../components/DropdownList";
import "../components/DropdownList.css";
import { getRelatedSongs, buildPlaylist } from "../RouteController";


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
            suggestedSongs: [],
            selectedSongs: []
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

    addSelectedSong(songObject) {
        // this.setState(({selectedSongs}) => ({ selectedSongs: {...selectedSongs, songObject}}));
        this.setState( prevState => ({
            selectedSongs: [...prevState.selectedSongs, songObject]
        }));
        this.setState({suggestedSongs: [], songCurrent: ""});
        console.log(this.state);
    }

    generatePlaylist() {
        const build = async () => {
            const response = await buildPlaylist(this.state.selectedSongs);
            console.log(response);
        }

        build();
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div>
                    <h1 className="header-text">User Home Page</h1>
                </div>
                <SearchBar handleChange={this.handleChange.bind(this)} error={this.state.error} songCurrent={this.state.songCurrent}/>
                <Button variant="contained"
                    sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
                    onClick={this.handleSubmit.bind(this)}>Search</Button>
                {this.state.suggestedSongs.length > 0 && 
                    <DropdownList suggestedSongs={this.state.suggestedSongs} addSong={this.addSelectedSong.bind(this)}/>
                }
                {this.state.selectedSongs.length > 0 &&
                    <div>
                        <h2 className="song-list">Your songs to generate a playlist from:</h2>
                        <div className="dropdown">
                            {this.state.selectedSongs.map((song) => (
                                <div className="dropdown-row" key={song.id}> {song.name} by {song.artist} </div>
                            ))}
                        </div>
                    <Button variant="contained" color="success" size="large"
                        sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
                        onClick={this.generatePlaylist.bind(this)}>Generate Playlist!</Button>
                    </div>

                }
            </React.Fragment>
        )
    }
}

export default UserHomePage;