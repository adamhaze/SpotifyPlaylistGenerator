import { Buffer } from 'buffer';
import qs from 'qs';
const axios = require('axios').default;

// Pattern: Model View Controller (MVC)
// Element: CONTROLLER
// handles change-of-state operations between the view (user interface) and the model (MongoDB)


//https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818

//https://gist.github.com/donstefani/70ef1069d4eab7f2339359526563aab2
async function getAuth(){
    const data = { grant_type: "client_credentials"};
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + Buffer.from(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`, 'utf-8').toString('base64'),
        },
    };

    try{
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            qs.stringify(data),
            headers
        );

        // console.log(response.data);
        return response.data.access_token;
    }catch(error){
        console.error(error);
        return error;
    }
}

// send JSON object with user info to create entry for user in DB
export async function createUser(obj){
    console.log(obj)
    try{
        const response = await axios.post('http://localhost:8080/users', obj);
        console.log(response);
        return true;
    }catch (error){
        console.log(error);
        return false;
    }
}

// send login credentials to backend to check against DB
export async function validateLogin(obj) {
    try {
        console.log("in validateLogin...")
        const response = await axios.post('http://localhost:8080/login', {
            'username': obj.username,
            'password': obj.password
        })
        return response.data;
    }catch(error){
        return error.data;
    }
}

// from login credentials, get user email for unique identification
export async function getUserEmail(obj) {
    try {
        const response = await axios.post('http://localhost:8080/getEmail', {
            'username': obj.username,
            'password': obj.password
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// obj = song title (string)
// take user input and query Spotify API for song results
export async function getRelatedSongs(obj) {
    console.log("Song input:" + obj);
    try {
        const auth_token = await getAuth();

        const data = {
            params: {q: obj, type: 'track', limit: 10},
            headers:{
                Accept : 'application/json',
                'Content-Type': "application/json",
                Authorization: 'Bearer ' + auth_token,
            }
        }

        const response = await axios.get(
            'https://api.spotify.com/v1/search', 
            data
        );

        const tracksList = response.data.tracks.items;

        let songs = [];
        for (const prop in tracksList){
            const result = tracksList[prop];
            //console.log(result);
            let songName = result.name;
            let artistName = result.artists[0].name;
            let songId = result.id;
            let artistId = result.artists[0].id;
            let song = {name: songName, artist: artistName, id: songId, artist_id: artistId};
            songs.push(song);
        }

        return songs;
    } catch (error) {
        return error.data;
    }
}

// send object containing user selected songs (strings) to backend for playlist generation
export async function buildPlaylist(obj) {
    try {
        const response = await axios.post('http://localhost:8080/buildPlaylist',obj);
        console.log('In build playlist...');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// send state data from DisplayGeneratedPlaylist to create a Playlist entry in DB
export async function savePlaylistToDB(obj) {
    try {
        const response = await axios.post('http://localhost:8080/savePlaylist',obj);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function getUserPlaylistsFromDB(obj) {
    try {
        const response = await axios.post('http://localhost:8080/getUserPlaylists',obj);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

