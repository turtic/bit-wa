import React from 'react';
import { emailFormating, dateFormating } from '../shared/dataFormating';



const Line = (props) => {
    return (
        <div className="col s12 ">
        <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                <div className="col s2">
                    <img src={props.user.picture.large} alt={props.user.name.first + "'s img"} className="circle responsive-img" />
                </div>
                <div className="col s10">
                    <span className="black-text">
                        <p>{props.user.name.first+" "+props.user.name.last}</p>
                        <p><i className="small material-icons">email</i>email: {emailFormating(props.user.email)}</p>
                       <p> <i className="small material-icons">cake</i>Date of birth: {dateFormating(props.user.dob)}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Line;

