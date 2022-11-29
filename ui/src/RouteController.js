const axios = require('axios').default;

export async function createUser(obj){

    console.log(obj)
    //
    // axios.post('http://localhost:8080/users', obj)
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
    try{
        const response = await axios.post('http://localhost:8080/users', obj);
        console.log(response);
        return true;
    }catch (error){
        console.log(error);
        return false;
    }
}


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

// obj = song title (string)
// TODO: make axios.post() to query spotify API from backend, respond w/ list of song objects
// response: return something like 'songs' template below
export async function getRelatedSongs(obj) {
    try {
        const songs = [{name: 'song1', artist: 'artist 1', id: 'song id 1'},
                        {name: 'song2', artist: 'artist 2', id: 'song id 2'},
                        {name: 'song3', artist: 'artist 3', id: 'song id 3'}]
        return songs;
        // return false;
    } catch (error) {
        return error.data;
    }
}

export async function buildPlaylist(obj) {
    // TODO: same format as getRelatedSongs() except :obj: is now a list of song objects
    // but still want to respond with a list of song objects
}