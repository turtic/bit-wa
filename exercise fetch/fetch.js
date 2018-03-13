var httpGet = function(url, callbackKojiOcekujeXHResponse){
    setTimeout(()=>{
        callbackKojiOcekujeXHResponse(url.toResponse());
    }, 10000);
}

var getMovieAsync = function(url, callbackKojiOcekujeMovie){
    httpGet(url, (xhrResponse)=>{
        callbackKojiOcekujeMovie(xhrResponse.toMovie());
    });
}

getMovieAsync("http://...", (movie)=>{
    console.log(movie);
});