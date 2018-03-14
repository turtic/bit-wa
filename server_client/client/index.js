import Blog from './dataModule.js'
import getInfo from './getDataModul.js'

console.log(getInfo())
console.log(getInfo)

let answer = getInfo()

let listOfBlogPost;

for (let i = 0; i < answer.length; i++) {

    listOfBlogPost = listOfBlogPost + `
    <div class="blog">
    <h2>${answer.title}</h2>
    <p>${answer.para}</p>
    </div>`

}

$(".row").append(listOfBlogPost);