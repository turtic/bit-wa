import React from 'react';
import { emailFormating, dateFormating, capitalizeFirstLetter } from '../shared/dataFormating';



const Line = (props) => {
    return (
        <div className="col s12 ">
            <div className= {"card-panel z-depth-1 hoverable " + props.user.gender}>
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <img src={props.user.picture.large} alt={props.user.name.first + "'s img"} className="circle responsive-img" />
                    </div>
                    <div className="col s10">

                        <p>{capitalizeFirstLetter(props.user.name.first) + " " + capitalizeFirstLetter(props.user.name.last)}</p>
                        <p><i className="small material-icons">email</i>email: {emailFormating(props.user.email)}</p>
                        <p><i className="small material-icons">cake</i>Date of birth: {dateFormating(props.user.dob)}</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Line;

