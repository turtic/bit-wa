// const requestUrl = '';
// fetch(requestUrl)
//    .then(function (response) {
//        return response.json();
//        console.log(response);
//    })
//    .then(function (myJson) {
//        console.log(myJson);
//    });


   
const requestUrl = 'http://127.0.0.1:3000/';

const getInfo = function (f) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            
            console.log(myJson);
            f(myJson)
        });
};


export default getInfo;
