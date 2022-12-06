import * as React from "react";
import { RoutingWrapper } from "../services/RoutingWrapper";
import BackgroundImage from "../components/BackgroundImage";
import "./UserHomePage.css";
import { getUserPlaylistsFromDB } from "../RouteController";

// Pattern: Model View Controller (MVC)
// Element: VIEW
// visual representation of a user's account


class AccountInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            username: this.props.location.state.username,
            password: this.props.location.state.password,
            userPlaylists: []
        }
    }

    getUserPlaylists () {
        // retrieve current user's playlists from DB for display
        const playlists = async () => {
            const response = await getUserPlaylistsFromDB(this.state);
            this.setState({userPlaylists: response});
        }
        playlists();
    }

    componentDidMount () {
        this.getUserPlaylists();
        console.log(this.state);
    }

    componentDidUpdate () {
        console.log(this.state);
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <div style={{textAlign: 'center', marginTop: 50}}>
                    <h1>Account Info Page</h1>
                    <div className="dropdown">
                        <span>email: {this.state.email}</span>
                        <span>username: {this.state.username}</span>
                    </div>
                    {this.state.userPlaylists.length > 0 &&
                        <div style={{marginTop: 50}}>
                            <h2>Your saved playlists:</h2>
                            <div>
                                {this.state.userPlaylists.map(playlist => (
                                    <div>
                                        <div className="playlist-name">{playlist.name}</div>
                                        <div> {playlist.songs.map(song => (
                                            <div>{song.name} by {song.artist}</div>
                                        ))} </div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                </div>
            </React.Fragment>
        )
    }
}


export default RoutingWrapper(AccountInfo);


