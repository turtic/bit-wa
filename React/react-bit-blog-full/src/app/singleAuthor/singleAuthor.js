import React from 'react';
import { ListOfAllAuthors } from '../../entities/authorEntity';




class SingleAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { author: {} }
    };



    componentDidMount() {

        let id = this.props.location.pathname.split('/');

        id = id[2]
        console.log(id)
        console.log(ListOfAllAuthors)

        ListOfAllAuthors.forEach(element => {
            if (element.id == id) {
                this.setState({ author: element })
            }

        });

    }

   


    render() {
        // https://maps.googleapis.com/maps/api/staticmap?center=-37.3159,81.1496&zoom=2&size=400x400&key
        return (

            <div className="container">
                <div className="row">

                    <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel grey lighten-5 z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s6">
                                    <img src="http://via.placeholder.com/350x350" alt="" class="responsive-img" />
                                </div>
                                <div class="col s10">
                                    <h3>{this.state.author.name}</h3>
                                    <p>username:{this.state.author.username}</p>
                                    <p>email:{this.state.author.email}</p>
                                    <p>phone:{this.state.author.phone}</p>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel grey lighten-5 z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s6 order-2">
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.author.lat},${this.state.author.lng}&zoom=2&size=400x400&key`} alt="" class="responsive-img" />
                                </div>
                                <div class="col s10 order-1">
                                    <h3>Address</h3>
                                    <p>street:{this.state.author.street}</p>
                                    <p>city:{this.state.author.city}</p>
                                    <p>zipcode:{this.state.author.zipcode}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel grey lighten-5 z-depth-1">
                            <div class="row valign-wrapper">

                                <div class="col s12">
                                    <h3>Company</h3>
                                    <p>name:{this.state.author.companyName}</p>
                                    <p>slogan:{this.state.author.slogan}</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}

export default SingleAuthor;
