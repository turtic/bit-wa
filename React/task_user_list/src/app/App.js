import React, { Component } from 'react';
import '../imports/materialize/css/materialize.css';
import './App.css';
import Footer from '../partials/footer';
import Navbar from '../partials/navbar';
// import Main from '../partials/main';
import usersData from '../usersData/usersData';
import Grid from '../partials/grid';
import { fetchMeData } from '../services/services';
import List from '../partials/list';
import Toggle from '../partials/toggler';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../partials/home';
import About from '../partials/about';

const App = (props) => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  )
}


export default App;


