import React, { Component } from 'react';
import '../imports/materialize/css/materialize.css';
import Footer from '../partials/footer';
import Navbar from '../partials/navbar';
// import Main from '../partials/main';
import usersData from '../usersData/usersData';
import Grid from '../partials/grid';
import {fetchMeData} from '../services/services';
import List from '../partials/list';


class App extends Component {

  //fetch user data

  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    fetchMeData.fetchUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <List ourUserData={this.state.users}/> 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
