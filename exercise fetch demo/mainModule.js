import { getInfo } from './fetch.js'
import Show from './dataModule.js'

var kadZavrsisPozoviMe = function (res) {

    console.log(res);

    let ourShow = new Show(res.name, res.id)

    console.log(ourShow);

document.querySelector('#name').innerText = 'Show name: ' + res.name;

document.querySelector('#id').innerText = 'Show ID: ' + res.id;

document.querySelector('#link').setAttribute("href", 'https://www.imdb.com/title/' + res.externals.imdb);

document.querySelector('#img').setAttribute("src",  res.image.medium);



}

getInfo(kadZavrsisPozoviMe);
