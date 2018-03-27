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
        // https://maps.googleapis.com/maps/api/staticmap?key&center=${this.state.author.lat},${this.state.author.lng}&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=480x360
        // https://maps.googleapis.com/maps/api/staticmap?center=-37.3159,81.1496&zoom=2&size=400x400&key
        return (

            <div className="container">
                <div className="row single-author">

                    <div class="col s12">
                        <div class="card-panel grey z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s6">
                                    <img src="http://media.moddb.com/images/groups/1/2/1088/star_wars_avatar_thingy_2.jpg" alt="" class="responsive-img" />
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


                    <div class="col s12 ">
                        <div class="card-panel grey z-depth-1">
                            <div class="row valign-wrapper">
                                <div class="col s6 order-2">
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?key&center=${this.state.author.lat},${this.state.author.lng}&zoom=2&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=480x360`} alt="" class="responsive-img" />
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

                    <div class="col s12 ">
                        <div class="card-panel grey z-depth-1">
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
