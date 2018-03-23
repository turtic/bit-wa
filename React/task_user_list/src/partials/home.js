import React, { Component } from 'react';
// import { Switch, Route } from "react-router-dom";
import '../imports/materialize/css/materialize.css';
import '../app/App.css';
import Footer from './footer';
import Navbar from './navbar';
// import Main from '../main';
// import usersData from '../usersData/usersData';
import Grid from './grid';
import { fetchMeData } from '../services/services';
import List from './list';
// import Toggle from './toggler';
import Load from './load';
import Empty from './empty';


class Home extends Component {

    //fetch user data

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isToggleOn: true,
            filteredUsers: [],
            inputValue: '',
            male: 0,
            female: 0,
            lastRefreshTime: 0,
            timeThatPassed: 0
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

            let fullName = this.state.users[i].name.first + ' ' + this.state.users[i].name.last

            if (fullName.search(event.target.value.toLowerCase()) !== -1) {
                y.push(this.state.users[i])
            }
        }

        //


        let maleCounter = 0;
        let femaleCounter = 0;

        for (let i = 0; i < y.length; i++) {
            console.log(i)

            if (y[i].gender === 'female') {
                femaleCounter++;
            } else {
                maleCounter++;
            }

        }

        this.setState({
            male: maleCounter,
            female: femaleCounter
        });

        this.setState({
            filteredUsers: y
        });
    }

    refreshClick() {
        fetchMeData.fetchUsers().then(response => {
            this.setState({
                users: response,
                filteredUsers: response
            });

            localStorage.setItem('displayedPeople', JSON.stringify(response));

            let maleCounter = 0;
            let femaleCounter = 0;

            for (let i = 0; i < response.length; i++) {


                if (response[i].gender === 'female') {
                    femaleCounter++;
                } else {
                    maleCounter++;
                }

            }

            this.setState({
                male: maleCounter,
                female: femaleCounter
            });

        });

        let refreshTime = new Date();
        localStorage.setItem('refreshTime', refreshTime.valueOf());
        this.setState({
            lastRefreshTime: parseInt(localStorage.getItem('refreshTime'))
        });

        console.log(refreshTime)

        console.log(this.state.lastRefreshTime)
        console.log(typeof this.state.lastRefreshTime)

    }

    handleClick() {

        localStorage.setItem('displayValue', !this.state.isToggleOn);

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));


    }

    componentDidMount() {

        //seting view to grid or list
        if (typeof (localStorage.getItem('displayValue')) !== 'undefined') {

            let a = (localStorage.getItem('displayValue') === 'true')

            this.setState({
                isToggleOn: a
            });
        }

        //loading people from memory
        if (localStorage.getItem('displayedPeople') !== null) {

            let displayedPeopleParse = JSON.parse(localStorage.getItem('displayedPeople'))

            this.setState({
                users: displayedPeopleParse
            });

            this.setState({
                filteredUsers: displayedPeopleParse

            });

            // counting male nad female

            let maleCounter = 0;
            let femaleCounter = 0;

            for (let i = 0; i < displayedPeopleParse.length; i++) {


                if (displayedPeopleParse[i].gender === 'female') {
                    femaleCounter++;
                } else {
                    maleCounter++;
                }

            }

            this.setState({
                male: maleCounter,
                female: femaleCounter
            });

        } else {
            this.refreshClick()
        }
        // geting refresh time from storage

        if (localStorage.getItem('refreshTime') == null){

            let currentTime = new Date()
            this.setState({
                lastRefreshTime: currentTime.valueOf()
            });

        } else {
            this.setState({
                lastRefreshTime: localStorage.getItem('refreshTime')
            });
        }
       
        // console.log(this.state.lastRefreshTime)

        setInterval(() => {

            let timeNow = new Date()
            let timeDifference = (timeNow.valueOf() - this.state.lastRefreshTime) / 1000;
            this.setState({
                timeThatPassed: timeDifference
            });

        }, 1000);


    }





    render() {
        return (
            <div className='container-fluid'>
                <Navbar toggleView={this.state.isToggleOn} handleThisClick={this.handleClick} refreshClick={this.refreshClick} inputValue={this.state.inputValue} inputTyping={this.inputTyping} />
                <div className='container'>
                    <div className='row'>
                        
                        <p className = "right-align custom-grey"> Male: {this.state.male} Female: {this.state.female} </p>
                        {this.state.users.length === 0 && this.state.filteredUsers.length === 0 ? <Load /> : ''}

                        {this.state.filteredUsers.length === 0 && this.state.users.length !== 0 ? <Empty /> : ''}

                        {this.state.isToggleOn ? <List ourUserData={this.state.filteredUsers} /> : <Grid ourUserData={this.state.filteredUsers} />}

                    </div>
                </div>
                <Footer timer={this.state.timeThatPassed} />
            </div>
        );
    }
}




export default Home;

