
const requestUrl = 'http://api.tvmaze.com/shows/103';

let showResponse;

const getInfo = function (f) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            showResponse = myJson;

            f(showResponse);
        });
};


export { getInfo };