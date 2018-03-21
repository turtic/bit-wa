import React, { Component } from 'react';


class FetchMeData extends Component {

    fetchUsers() {
        return fetch('https://randomuser.me/api/?results=15')
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result);
                return result.results;
            })
            // .then
    }

}




export const fetchMeData = new FetchMeData();