import React from 'react';
import Card from './card';

const Grid = (props) => {
    return (
        <div>
            {props.ourUserData.map(user => {
                return <Card user={user}/> 
            })}
        </div>
    )
}

export default Grid;