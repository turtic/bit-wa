import React from 'react';
import { emailFormating, dateFormating, capitalizeFirstLetter } from '../shared/dataFormating';

// emailFormating

// dateFormating

const Card = (props) => {
    return (
        <div className="col s12 m6 l4">
            <div className={"card hoverable" + " " + props.user.gender}>
                <div className="card-image">
                    <img src={props.user.picture.large} alt={props.user.name.first + "'s img"} />
                    <span className="card-title">{capitalizeFirstLetter(props.user.name.first)}</span>
                </div>
                <div className="card-content">
                    <p>email: { emailFormating(props.user.email)}</p>
                    <p>Date of birth: {dateFormating(props.user.dob) }</p>
                </div>

            </div>
        </div>
    )
}

export default Card;