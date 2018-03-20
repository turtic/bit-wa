import React, { Component } from 'react';
import './imports/materialize/css/materialize.css';
import Footer from './partials/footer';
import Navbar from './partials/navbar';
import Main from './partials/main';


class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <Main />
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
