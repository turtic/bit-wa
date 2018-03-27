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

    componentDidMount() {

        // Please.fetchAuthors().then((result) => {
        //     this.setState({ authorList: result })
        // })
        // console.log(ListOfAllAuthors)

        Please.fetchAuthors().then((result) => {

            resetListOfAllAuthors();

            result.forEach(function (element) {
                let newAuthor = new AuthorEntity(element.id, element.name, element.phone, element.username, element.email, element.address.street, element.address.city, element.address.zipcode, element.company.name, element.company.catchPhrase, element.address.geo.lat, element.address.geo.lng)
                ListOfAllAuthors.push(newAuthor)
            });

            this.setState({ authorList: ListOfAllAuthors })

        })

    }


    render() {

        return (
            <div class="container">
                <div class="row">

                    <h2 className="center-align">AUTHORS({this.state.authorList.length})</h2>
                    <ul className="author-list">
                        {this.state.authorList.map((element) =>
                            <li className='underline'><i class="material-icons">star</i><Link to={`authors/${element.id}`}>{element.name}</Link></li>)}

                    </ul>
                </div>
            </div>
        )
    }
}

export default Authors;


