import React from 'react';
import { Please } from '../services/getApiData';

export let ListOfAllAuthors = [];

export const resetListOfAllAuthors = ()=> {ListOfAllAuthors = [];}



export class AuthorEntity {
    constructor(id, name, phone, username, email, street, city, zipcode, companyName, slogan, lat, lng ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.companyName = companyName;
        this.slogan = slogan;
        this.authorsPosts = [];
        this.lat = lat;
        this.lng = lng;

    }

}


//get authors from API creat Authors and put into ListOfAuthors
// Please.fetchAuthors().then((result) => {

//     result.forEach(function (element) {
        // let newAuthor = new AuthorEntity(element.id, element.name, element.phone, element.username, element.email, element.address.street,  element.address.city,  element.address.zipcode, element.company.name,  element.company.catchPhrase )
//         ListOfAllAuthors.push(newAuthor)
//     });


// })




// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }