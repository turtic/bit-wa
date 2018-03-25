import React from 'react';
import { ListOfAllAuthors } from '../../entities/authorEntity';
import { ListOfAllPosts } from '../../entities/postEntity';
import { Link } from "react-router-dom";



class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            contentValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {
        this.setState({
            titleValue: event.target.value
        });
    }

    handleChange2 = (event) => {
        this.setState({
            contentValue: event.target.value
        });
    }

    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.titleValue,
            body: this.state.contentValue,
            userId: 1000
        }
        console.log(data)
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))

        //   return to home page after submit
        this.props.history.push('/');
    }


    

    componentDidMount() {




    }


    render() {

        return (

            <div className="container">
                <div className="row">
                    <h1 className="center-align">Add Post</h1>



                    <div class="row">
                        <form class="col s12" onSubmit={this.handleSubmit}>

                            <div class="row">
                                <div class="input-field col s6">
                                    <input placeholder="Post title" id="postTitle" type="text" class="validate" value={this.state.titleValue}
                                        onChange={this.handleChange} name='title' />
                                    <label class="active" for="first_name2">Title</label>
                                </div>
                            </div>
                            <div class="row">
                                <label for="textarea1" class="pl10px">Content</label>
                                <div class="input-field col s12">

                                    <textarea id="textarea1" class="materialize-textarea" value={this.state.contentValue}
                                        onChange={this.handleChange2} name='content'></textarea>

                                </div>
                            </div>

                            <Link to='/home'>   <button class="btn waves-effect waves-light" type="button">Cancel
    <i class="material-icons right">cancel</i>
                            </button></Link>

                         
                          <button class="btn waves-effect  waves-light" type="submit" name="action">Save
    <i class="material-icons right">save</i>
                            </button>
                        </form>

                    </div>


                </div>
            </div>


        )
    }
}

export default AddPost;







