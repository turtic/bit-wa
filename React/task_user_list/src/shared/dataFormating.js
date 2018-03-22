// import React, { Component } from 'react';



export const emailFormating = (email) => {

    let splitEmail = email.split('@');
    return splitEmail[0].slice(0, 3) + '...' + splitEmail[0].slice(-3) + '@' + splitEmail[1];

}

export const dateFormating = (date) => {

    let removeClock = date.split(' ');
    let splitDate = removeClock[0].split('-')
    return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}.`

}


export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}