import React from 'react';

const requestUrl = 'https://jsonplaceholder.typicode.com/';

class FetchMeData extends React.Component {

    fetchAuthors() {
        return fetch( requestUrl + 'users')
            .then(function (response) {
                return response.json();
            })
            // .then(function (result) {
                
            //     return result;
            // })
            
    }

    fetchPosts() {
        return fetch(requestUrl + 'posts')
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                
                return result;
            })
            
    }

    fetchAuthorSingle(authorID) {
        return fetch(requestUrl + authorID)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                
                return result;
            })
            
    }

    

}




export const Please = new FetchMeData();