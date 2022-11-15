const axios = require('axios').default;

export function createUser(obj){

    console.log(obj)

    axios.post('http://localhost:8080/users', obj)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}