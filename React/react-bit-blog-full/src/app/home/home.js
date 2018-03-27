import React from 'react';
import { ListOfAllPosts, PostEntity, resetListOfAllPosts } from '../../entities/postEntity';
import { Link } from "react-router-dom";
import { Please } from '../../services/getApiData';
import { ListOfAllAuthors } from '../../entities/authorEntity';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { postList: [] }
    };

    componentDidMount() {

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

            this.setState({ postList: ListOfAllPosts })
        })

    }


    render() {

        return (
            <div class="container">
                <div class="row post-list">

                    <h1 className="center-align">POSTS</h1>

                    {this.state.postList.map((element) =>

                        <Link to={`posts/${element.postID}`}>


                            <div class="row">
                                <div class="col s12">
                                    <div class="card blue-grey darken-1 hoverable">
                                        <div class="card-content white-text">
                                            <span class="card-title">{element.title}</span>
                                            <p>{element.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Link>
                    )}


                </div>
            </div>


        )
    }
}

export default Home;


