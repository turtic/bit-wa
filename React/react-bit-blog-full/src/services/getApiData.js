const requestUrl = 'https://api.randomuser.me/';

let getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });

    let getUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });
    
export {getPosts, getUsers};


// member me?
{/* <div styles = {{margin:"1px"}}/>
const mystyle={margin : "1px"}
<div style={mystyle}/> */}