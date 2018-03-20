import React, { Component } from 'react';
import Line from './line';

const List = (props) => {
    return (
        <div>
            {props.ourUserData.map(user => {
                return <Line user={user}/> 
            })}
        </div>
    )
}

export default List;