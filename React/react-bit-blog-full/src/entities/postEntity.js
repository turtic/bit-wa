import React from 'react';
import { Please } from '../services/getApiData';

export let ListOfAllPosts = [];

export const resetListOfAllPosts = () => { ListOfAllPosts = []; }

export class PostEntity {
    constructor(authorID, postID, title, content) {
        this.authorID = authorID;
        this.postID = postID;
        this.title = title;
        this.content = content;
        // this.authorName = authorName;

    }
}


// Please.fetchPosts().then((result) => {

//     resetListOfAllPosts();

//     result.forEach(function (element) {
//         let newPost = new PostEntity(element.userId, element.id, element.title, element.body);

//         ListOfAllPosts.push(newPost)
//     });

//     this.setState({ postList: ListOfAllPosts})
// })


    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   }