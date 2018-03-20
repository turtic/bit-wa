import React, { Component } from 'react';
import usersData from '../usersData/usersData';

const emailFormating = (email) => {

    let splitEmail = email.split('@');
    return splitEmail[0].slice(0, 3) + '...@' + splitEmail[1];

}

const dateFormating = (date) => {

    let removeClock = date.split(' ');
    let splitDate = removeClock[0].split('-')
    return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}.`

}

const listUsers = usersData.map((user) =>

    <div className="col s12 m6 l4">
        <div className="card hoverable">
            <div className="card-image">
                <img src={user.picture.large} alt={user.name.first + "'s img"} />
                <span className="card-title">{user.name.first}</span>
            </div>
            <div className="card-content">
                <p>email: {emailFormating(user.email)}</p>
                <p>Date of birth: {dateFormating(user.dob)}</p>
            </div>

        </div>
    </div>

);

const Main = () => (

    listUsers

);

export default Main;