
import React from 'react';

import { ListOfAllPosts } from '../../entities/postEntity';
import { ListOfAllAuthors } from '../../entities/authorEntity';

import { Link } from "react-router-dom";


class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {post: {}, authorID: 1, author: {}, authorList:[] }
    };

    

    componentDidMount() {

    let id = this.props.match.params.postID;

    ListOfAllPosts.forEach(element => {
        if (element.postID == id){
 
         this.setState({ authorID : element.authorID })
         this.setState({ post : element })

        }
    });
   

       ListOfAllAuthors.forEach(element => {
           if (element.id == this.state.authorID){
            this.setState({ author: element })
           }
       });

       this.setState({ authorList: ListOfAllAuthors })

    }


    render() {

        return (
            <div className="container">
            <div className="row">
                <h1 className="center-align">{this.state.post.title}</h1>
                
                <Link to={`authors/${this.state.authorID}`}><p>{this.state.author.name}</p></Link>

                <p>{this.state.post.content}</p>
    
                <h3>More posts</h3>
                {console.log(this.state.author.authorsPosts)}
                <ul>
                {/* {this.state.author.authorsPosts.map((element) =>
                        <li><Link to={`authors/${element.id}`}>{element.title}</Link></li>)} */}

                        {/* {
                            
                            ()=>{for (let i = 0; i < 4; i++) {
                            
                                ListOfAllAuthors
                            
                        }}
                        
                        } */}

                    <li><a href="">title 10</a></li>
                    <li><a href="">Title 11</a></li>
                    <li><a href="">Title 12</a></li>
                </ul>
    
            </div>
        </div>
        
            
        )
    }
}

export default SinglePost;
