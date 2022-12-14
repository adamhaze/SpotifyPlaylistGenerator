import * as React from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./UserHomePage.css";
import BackgroundImage from "../components/BackgroundImage";
import { RoutingWrapper } from "../services/RoutingWrapper";
import { ButtonGroup } from "@mui/material";
import { savePlaylistToDB } from "../RouteController";

// Pattern: Model View Controller (MVC)
// Element: VIEW
// visual representation of a generated playlist


class DisplayGeneratedPlaylist extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			email: this.props.location.state.email,
			songs: this.props.location.state.songs,
			username: this.props.location.state.username,
			password: this.props.location.state.password,
			name: "",
			error: false,
			save: false
		}
	}

	// update given state property
	// used by: playlist name input
	handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


	// check is user already has playlist with same name
	// if so, force rename
	// else, save playlist to db, route back to home page
	// used by: Save Playlist! button
	savePlaylist() {
		const saver = async () => {
			// get response from RouteController
			const response = await savePlaylistToDB(this.state);
			if (!response) {
				// user already has playlist w/ that name
				this.setState({error: true});
			} else {
				this.setState({error: false});
			}
		}
		saver();
	}

	// adjust state to realize user wants to save their playlist
	// used by: YES button
	savePlaylistFlag() {
		this.setState({save: true})
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	// maintain user info through state when navigating to user home page
    routeChange = () => {
        this.props.navigate('/home', {state: {username: this.state.username, password: this.state.password}});
    }


	render () {
		return (
			<React.Fragment>
				<BackgroundImage/>
				<div>
					<h1 className="header-text">Your Newly Generated Playlist</h1>
				</div>
				<div className="playlist-display">
					{this.state.songs.map((song, index) => (
						<div className="playlist-row" key={song.id}> {index + 1}. {song.name} by {song.artist} </div>
					))}
				</div>
				<div>
					<h2 className="save-playlist-text">Would you like to save this playlist?</h2>
					<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
						<ButtonGroup variant="contained" size="large">
							<Button color="success" onClick={this.savePlaylistFlag.bind(this)}> YES </Button>
							<Button color="error" onClick={this.routeChange.bind(this)}> NO </Button>
						</ButtonGroup>
					</Box>
					{this.state.save && 
					<div>
						<h2 className="save-playlist-text">Give this playlist a name: </h2>
						<TextField 
							label="playlist name" 
							variant="outlined" 
							name="name"
							value={this.state.name}
							onChange={this.handleChange.bind(this)}
							error={this.state.error}
							helperText={this.state.error ? 'Looks like you already have a playlist with the same name...' : ''}
							sx={{ 
								width: "50ch", 
								display: "flex",
								justifySelf: "center",
								alignContent: "center",
								background: "rgb(232, 241, 250)",
								ml: "auto",
								mr: "auto",
								mt: 1,
								border: 1,
								borderColor: "rgb(232, 241, 250)"
							}}
						/>
						<Button variant="contained" color="success" size="large"
							sx={{display: "flex", ml: "auto", mr: "auto", mt: 2}}
							onClick={this.savePlaylist.bind(this)}>Save Playlist!</Button>
					</div>
					}
					
				</div>
			
			</React.Fragment>
		)
	}


}

export default RoutingWrapper(DisplayGeneratedPlaylist);