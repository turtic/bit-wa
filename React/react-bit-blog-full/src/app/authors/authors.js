import React from 'react';
import { Please } from '../../services/getApiData';
import { ListOfAllAuthors, AuthorEntity, resetListOfAllAuthors } from '../../entities/authorEntity';

import SingleAuthor from '../singleAuthor/singleAuthor';
import { Switch, Route, Redirect, Link } from "react-router-dom";



class Authors extends React.Component {

    constructor(props) {
        super(props);
        this.state = { authorList: [] }
    };




    // 


    onClick = () => {
        this.setState({ selected: true })
    }

    componentDidMount() {

        // Please.fetchAuthors().then((result) => {
        //     this.setState({ authorList: result })
        // })
        console.log(ListOfAllAuthors)

        Please.fetchAuthors().then((result) => {

            resetListOfAllAuthors();

            result.forEach(function (element) {
                let newAuthor = new AuthorEntity(element.id, element.name, element.phone, element.username, element.email, element.address.street,  element.address.city,  element.address.zipcode, element.company.name,  element.company.catchPhrase)
                ListOfAllAuthors.push(newAuthor)
            });

            this.setState({ authorList: ListOfAllAuthors })

            // passTheAuthorObj = (elementID) => {
            //     for (let i = 0; i < ListOfAllAuthors.length; i++) {
            //         if (ListOfAllAuthors[i].id == elementID) {
            //             return ListOfAllAuthors[i]
            //         }
            //     }
            // }


        })

    }


    render() {

        return (
            <div class="container">
                <div class="row">

                    {
                        console.log(this.state.authorList)

                    }
                    {
                        console.log(ListOfAllAuthors)
                    }



                    <h2 className="center-align">AUTHORS({this.state.authorList.length})</h2>

                    {this.state.authorList.map((element) =>
                        <li><Link to={`authors/${element.id}`}>{element.name}</Link></li>)}


                    {/* {this.state.authorList.map((element) =>
                        <li><Link to={{
                            pathname: `/authors/${element.id}`,
                            state: {
                                cardHeading: 'This is a heading',
                                cardDesc: 'Description'
                            }
                        }} >{element.name}</Link></li>)} */}






                    {/* <Route path="/authors/:id" component={SingleAuthor} /> */}


                    {/* <Route path="/topics/:name" component={Topic} />
...
<a href="/topics/food">Food</a> */}


                </div>
            </div>
        )
    }
}

export default Authors;


