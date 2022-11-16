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
    }catch (error){
        console.log(error);
    }
    return "";
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