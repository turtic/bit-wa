import Blog from './dataModule.js'
import getInfo from './getDataModul.js'


let getMeTheAnswer = function (answer) {
    
    let listOfBlogPost = "";
   
    for (let i = 0; i < answer.loremText.length; i++) {
        
        listOfBlogPost = listOfBlogPost + `
    <div class="card-panel hoverable col-12 blue-grey darken-1">
    <h2 class="white-text">${answer.loremText[i].title}</h2>
    <p class="white-text">${answer.loremText[i].para}</p>
    </div>`

    }

    $(".blog-posts").append(listOfBlogPost);
}


getInfo(getMeTheAnswer)