
import React from 'react';

import { ListOfAllPosts, PostEntity, resetListOfAllPosts } from '../../entities/postEntity';
import { ListOfAllAuthors, resetListOfAllAuthors, AuthorEntity } from '../../entities/authorEntity';

import { Link } from "react-router-dom";
import { Please } from '../../services/getApiData';


class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = { post: {}, authorID: 1, author: {authorsPosts:[], id:0}, authorList: [] }
    };



    componentDidMount() {

        let id = this.props.match.params.postID;

        ListOfAllPosts.forEach(element => {
            if (element.postID == id) {

                this.setState({ authorID: element.authorID })
                this.setState({ post: element })

            }
        });

        Please.fetchAuthors().then((result) => {

            resetListOfAllAuthors();

            result.forEach(function (element) {
                let newAuthor = new AuthorEntity(element.id, element.name, element.phone, element.username, element.email, element.address.street, element.address.city, element.address.zipcode, element.company.name, element.company.catchPhrase,  element.address.geo.lat, element.address.geo.lng)
                ListOfAllAuthors.push(newAuthor)
            });

            this.setState({ authorList: ListOfAllAuthors })

            ListOfAllAuthors.forEach(element => {
                if (element.id == this.state.authorID) {
                    this.setState({ author: element })
                }
            });
            console.log(this.state.authorList)

            console.log(this.state.author)
            Please.fetchPosts().then((result) => {

                resetListOfAllPosts();
    
                result.forEach(function (element) {
                    let newPost = new PostEntity(element.userId, element.id, element.title, element.body);
    
                    ListOfAllPosts.push(newPost)
    
                    ListOfAllAuthors.forEach(element => {
    
                        if (element.id === newPost.authorID) {
                            element.authorsPosts.push(newPost)
                        }
                        
                    });
                });
                console.log(this.state.author)
                // this.setState({ postList: ListOfAllPosts })
                ListOfAllAuthors.forEach(element => {
                    if (element.id == this.state.authorID) {
                        this.setState({ author: element })
                    }
                });
            })
        })

    }


    componentWillReceiveProps(nextProps){
        let id = this.props.match.params.postID;

        ListOfAllPosts.forEach(element => {
            if (element.postID == id) {

                this.setState({ authorID: element.authorID })
                this.setState({ post: element })

            }
        });

        Please.fetchAuthors().then((result) => {

            resetListOfAllAuthors();

            result.forEach(function (element) {
                let newAuthor = new AuthorEntity(element.id, element.name, element.phone, element.username, element.email, element.address.street, element.address.city, element.address.zipcode, element.company.name, element.company.catchPhrase)
                ListOfAllAuthors.push(newAuthor)
            });

            this.setState({ authorList: ListOfAllAuthors })

            ListOfAllAuthors.forEach(element => {
                if (element.id == this.state.authorID) {
                    this.setState({ author: element })
                }
            });
            console.log(this.state.authorList)

            console.log(this.state.author)
            Please.fetchPosts().then((result) => {

                resetListOfAllPosts();
    
                result.forEach(function (element) {
                    let newPost = new PostEntity(element.userId, element.id, element.title, element.body);
    
                    ListOfAllPosts.push(newPost)
    
                    ListOfAllAuthors.forEach(element => {
    
                        if (element.id === newPost.authorID) {
                            element.authorsPosts.push(newPost)
                        }
                        
                    });
                });
                console.log(this.state.author)
                // this.setState({ postList: ListOfAllPosts })
                ListOfAllAuthors.forEach(element => {
                    if (element.id == this.state.authorID) {
                        this.setState({ author: element })
                    }
                });
            })
        })

        

    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <h1 className="center-align">{this.state.post.title}</h1>

                    <p>by <Link to={`/authors/${this.state.authorID}`}>{this.state.author.name}</Link></p>
{console.log(this.state.authorID)}
                    <p>{this.state.post.content}</p>

                    <h3>More posts</h3>
                    {console.log(this.state.author.authorsPosts)}
                    <ul>
                        {this.state.author.authorsPosts.map((element) =>
                        <li><Link to={`${element.postID}`}>{element.title}</Link></li>)} 
                    </ul>

                </div>
            </div>


        )
    }
}

export default SinglePost;
