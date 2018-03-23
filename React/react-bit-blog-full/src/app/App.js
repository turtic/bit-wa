import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from './partials/footer';
import Header from './partials/header';
import Home from './home/home';
import Authors from './authors/authors';
import About from './about/about';
import SingleAuthor from './singleAuthor/singleAuthor';
import SinglePost from './singlePost/singlePost';
import AddPost from './addPost/addPost';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/authors' component={Authors} />
          <Redirect from='/' to='/home' />
        </Switch>
        <SingleAuthor/> */}
        <AddPost/>
        <Footer />
        {/* <Route path="/authors/:name" component={SingleAuthor} />
        <Route path="/post/:id" component={SinglePost} /> */}
      </div>
    );
  }
}

export default App;



