import React, { Component } from 'react';
import './imports/materialize/css/materialize.css'
import Main from './blog_post';


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo center">React Blog</a>
          </div>
        </nav>
        <div className = "container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
