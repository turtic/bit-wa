import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import '../imports/materialize/css/materialize.css';
import '../app/App.css';
import Footer from './footer';
import Navbar from './navbar';
// import Main from '../main';
import usersData from '../usersData/usersData';
import Grid from './grid';
import { fetchMeData } from '../services/services';
import List from './list';
import Toggle from './toggler';
import Load from './load';


class Home extends Component {

    //fetch user data

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isToggleOn: true,
            filteredUsers: [],
            inputValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.refreshClick = this.refreshClick.bind(this);
        this.inputTyping = this.inputTyping.bind(this);
    }



    inputTyping(event) {
        this.setState({
            inputValue: event.target.value,
            filteredUsers: this.state.users
        });

        let y = [];

        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].name.first.search(event.target.value) !== -1) {
                y.push(this.state.users[i])
            }
        }

        this.setState({
            filteredUsers: y
        });
    }

    refreshClick() {
        fetchMeData.fetchUsers().then(response => {
            this.setState({
                filteredUsers: response
            });
        });
    }

    handleClick() {

        localStorage.setItem('displayValue', !this.state.isToggleOn);

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        
    }

    componentDidMount() {
        fetchMeData.fetchUsers().then(response => {
            this.setState({
                users: response,
                filteredUsers: response
            });
        });
    }



    render() {
        return (
            <div className='container-fluid'>
                <Navbar toggleView={this.state.isToggleOn} handleThisClick={this.handleClick} refreshClick={this.refreshClick} inputValue={this.state.inputValue} inputTyping={this.inputTyping} />
                <div className='container'>
                    <div className='row'>

                        {this.state.users.length === 0 ? <Load />: ''}

                        {this.state.isToggleOn ? <List ourUserData={this.state.filteredUsers} /> : <Grid ourUserData={this.state.filteredUsers} />}

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}




export default Home;

