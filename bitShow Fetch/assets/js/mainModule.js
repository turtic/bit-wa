// var mainModule = (function (UIModule, dataModule) {

//     function addLoginButtonListener() {

//         document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {







//         });
//     }

//     return {
//         init: function () {
//             addLoginButtonListener();
//         }
//     }

// })(UIModule, dataModule);

// mainModule.init();



// $('#search-input').keypress(function (e) {

// if (e.keyCode == 13) {
//     e.preventDefault();

//     let gitHubAPI = 'http://api.tvmaze.com/search/shows?q=';
//     let inputValue = $('#search-input').val();
//     let searchName = gitHubAPI + inputValue;

//     var request = $.ajax({
//         url: searchName,
//         method: "GET",
//     });

//     request.done(function (response) {

//         for (let i = 0; i < 6; i++) {

//             showName = response[i].show.name;
//             showImage = response[i].show.image.original;
//             showURL = response[i].show.url;
//             // showCrew = showURL + '/crew';
//             // showAKA = showURL +'/akas';
//             // showEpisodes = showURL + '/episodes'
//             // http://api.tvmaze.com/mrrobot/1/crew

//             $('#person' + (i + 1) + ' h5').text(showName);
//             $('#person' + (i + 1) + ' img').attr("src", showImage);
//             $('#person' + (i + 1) + ' a').attr("href", showEpisodes);


//         }
//     });

//     request.fail(function (jqXHR, textStatus) {
//         alert("Request failed: " + textStatus);
//     });

// }
// });



// ++++++++++++++++++++++++++++++++++++ GIT SEARCH ++++++++++++++++++++++++++++++++++++



import { TVshows, Show, Cast, Season } from './dataModule.js'



const requestUrl = 'http://api.tvmaze.com/shows';
fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let response = myJson;
        console.log(response);
        console.log(myJson)



        for (let i = 0; i < 50; i++) {

            let showName = response[i].name;
            let showImage = response[i].image.original;
            let showID = response[i].id;
            let showSummary = response[i].summary;

            let newObj = new Show(showName, showImage, showID, showSummary);
            TVshows.shows.push(newObj);

            let element = `<div class="col-12 col-md-6 col-lg-4">
    <div id="${showID}" class="card">
        
            <img class="card-img-top" src="${showImage}" alt="Card image cap">
       
        <div class="card-body">
            
                <h5 class="card-title name1">${showName}</h5>
            
    
        </div>
    </div>
    </div>`
            $(".card-deck").append(element);


        }




    });





$(document).keypress(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();

        let gitHubAPI = 'http://api.tvmaze.com/search/shows?q=';
        let inputValue = $('#search-input').val();
        let searchName = gitHubAPI + inputValue;

        var request = $.ajax({
            url: searchName,
            method: "GET",
        });

        // delete top50
        $(".card-deck").html(' ');

        request.done(function (response) {

            for (let i = 0; i < 10; i++) {

                let showName = response[i].show.name;
                let showImage = response[i].show.image.original;
                let showID = response[i].show.id;
                let showSummary = response[i].show.summary;

                let newObj = new Show(showName, showImage, showID, showSummary);
                TVshows.shows.push(newObj);

                let element = `<div class="col-12 col-md-6 col-lg-4">
<div id="${showID}" class="card">
    
        <img class="card-img-top" src="${showImage}" alt="Card image cap">
   
    <div class="card-body">
        
            <h5 class="card-title name1">${showName}</h5>
        

    </div>
</div>
</div>`
                $(".card-deck").append(element);


            }
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
});


$("body").on("click", ".card", function () {

    let cardID = $(this).attr("id");
    let infObj;

    //es6 - filter
    for (let i = 0; i < TVshows.shows.length; i++) {

        if (cardID == TVshows.shows[i].id) {
            infObj = TVshows.shows[i];
            break;
        }

        // shows[1];


    }


    let seasonCast = '';
    const requestUrl = 'http://api.tvmaze.com/shows/' + cardID + '/cast';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            let response = myJson;

            for (let i = 0; i < response.length; i++) {

                seasonCast = seasonCast + `<li>${response[i].person.name}</li>`

            }

        });




    const requestUrl2 = 'http://api.tvmaze.com/shows/' + cardID + '/seasons';
    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            let response = myJson;

            let seasonDates = '';
            for (let i = 0; i < response.length; i++) {

                seasonDates = seasonDates + `<li>${response[i].premiereDate} ${response[i].endDate}</li>`

            }




            $(".card-deck").html(' ');

            let infoElement = `  
      <h1>${infObj.name}</h1>
      <div class="container">
          <div class="row">
              <div class="col-12 col-lg-6">
                  <img class="info-img" src="${infObj.image}" alt="">
              </div>
              <div class="col-12 col-lg-6">
                  <h3>Seasons (${response.length})</h3>
                  <ul>
                      ${seasonDates}
                  </ul>
                  <h3>Cast</h3>
                  <ul>
                      ${seasonCast}
                  </ul>
              </div>
          </div>
          <div class="row">
              <h2>Show Details</h2>
              ${infObj.summary}
          </div>
      </div>`

            $(".card-deck").append(infoElement);



        });


});



$("#search-input").on("keyup", function () {

    let searchString = $("#search-input").val();
    console.log(searchString);
    let listOfShows = [];

    let request = $.ajax({
        url: 'http://api.tvmaze.com/shows',
        method: "GET",
    });

    // showName = response[i].name;

    request.done(function (response) {

        console.log(response.length);

        for (let i = 0; i < response.length; i++) {
            // console.log(response[i].name);
            console.log(response[i].name.startsWith(searchString));

            if (response[i].name.toLowerCase().startsWith(searchString))

                listOfShows.push(response[i].name)


            // str.startsWith("Hello");

        };
        let listOfShowsHTML = '';

        for (let i = 0; i < listOfShows.length; i++) {

            listOfShowsHTML = listOfShowsHTML + `<option>${listOfShows[i]}</option>`

        };

        $("#searchShows").append(listOfShowsHTML);

        console.log(listOfShows);
        console.log(listOfShowsHTML)


    });


});