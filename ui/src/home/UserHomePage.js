import * as React from "react";
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./UserHomePage.css";
import BackgroundImage from "../components/BackgroundImage";
// import CenterImage from "../components/CenterImage";
import SearchBar from "../components/SearchBar";
import DropdownList from "../components/DropdownList";
import "../components/DropdownList.css";
import { getRelatedSongs, buildPlaylist, getUserEmail } from "../RouteController";
import { RoutingWrapper } from "../services/RoutingWrapper";


class UserHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.location.state.username,
            password: this.props.location.state.password,
            email: "",
            error: false,
            songCurrent: "",
            suggestedSongs: [],
            selectedSongs: [],
            playlistCurrent: [],
            playlistGenerated: false
        }
    }

    // update given state property
	// used by: search bar
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // execute search functionality, used by: search button
    handleSubmit() {
        const related = async () => {
            // get response from RouteController
            const response = await getRelatedSongs(this.state.songCurrent);
            if (!response) {
                // Spotify search couldn't handle user input
                this.setState({error: true});
            } else {
                // save list of returned songs from search to the state
                this.setState({error: false, suggestedSongs: response});
                console.log(response);
            }
        }
        related();
    }

    // when user selects song from dropdown (results of search), add it to their
    // list of songs used to build a playlist for them in state for convenience
    // used by: DropdownList
    addSelectedSong(songObject) {
        // this.setState(({selectedSongs}) => ({ selectedSongs: {...selectedSongs, songObject}}));
        this.setState( prevState => ({
            selectedSongs: [...prevState.selectedSongs, songObject]
        }));
        this.setState({suggestedSongs: [], songCurrent: ""});
        console.log(this.state);
    }

    // used by: generate playlist button (via componentDidUpdate)
    routeChange = () => {
        // navigate to new page for displaying the generated playlist
        this.props.navigate('/generated', {state: {email: this.state.email, 
                                                    songs: this.state.playlistCurrent,
                                                    username: this.state.username,
                                                    password: this.state.password}});
    }

    // used by: AccountBoxIcon
    routeChangeAcctInfo = () => {
        this.props.navigate('/account', {state: {email: this.state.email, username: this.state.username, password: this.state.password}});
    }

    generatePlaylist() {
        // build playlist on backend, save generated playlist to state for accessibility
        const playlist = async () => {
            const response = await buildPlaylist(this.state.selectedSongs);
            this.setState({playlistCurrent: response, playlistGenerated: true})
            console.log(this.state);
        }
        console.log('Generate a playlist...');
        playlist();
    }


    // when page is loaded (from login) need to get user email from DB
    // b/c only username and password are saved from Login
    componentDidMount() {
        // get user email address to use as unique identifier
        const email = async () => {
            const response = await getUserEmail(this.state);
            this.setState({email: response})
        }
        email();
        console.log(this.state);
    }

    // send user to display page if they generated a playlist
    // on update b/c route change should be triggered by a state update
    componentDidUpdate() {
        if (this.state.playlistGenerated){
            this.routeChange();
        }
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div style={{display: 'flex',alignItems: 'center',flexDirection: "column",marginLeft: "75%"}}>
                    <AccountBoxIcon onClick={this.routeChangeAcctInfo.bind(this)} sx={{fontSize: "75px","&:hover": { color: "grey" }}}/>
                    <span style={{fontSize: "100%"}}>My Account</span>
                </div>
                {/* <div>
                    <h1 className="header-text">User Home Page</h1>
                </div> */}
                <SearchBar handleChange={this.handleChange.bind(this)} error={this.state.error} songCurrent={this.state.songCurrent}/>
                {this.state.suggestedSongs.length > 0 && 
                    <DropdownList suggestedSongs={this.state.suggestedSongs} addSong={this.addSelectedSong.bind(this)}/>
                }
                <Button variant="contained"
                    sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
                    onClick={this.handleSubmit.bind(this)}>Search</Button>
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

export default RoutingWrapper(UserHomePage);