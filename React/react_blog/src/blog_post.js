import React, { Component } from 'react';
import postsData from './posts';

const postList = postsData.map((post) =>
    <div className="col s12 m6 hoverable">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
            </div>
        </div>
    </div>
);

class Main extends React.Component {
    render() {
        return postList
    }
}

export default Main;