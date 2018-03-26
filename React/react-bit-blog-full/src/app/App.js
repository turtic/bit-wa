import React, { Component } from 'react';
// import logo from '../logo.svg';
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
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path="/posts/new" component={AddPost} />
          <Route exact path="/authors/:id" component={SingleAuthor} />
          <Route exact path="/posts/:postID" component={SinglePost} />
          
          <Redirect  from='/' to='/home' />
        </Switch>
        <Footer />
      
      </div>
    );
  }
}

export default App;



