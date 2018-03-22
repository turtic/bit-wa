import React from 'react';
// import Toggle from './toggler';
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";



const Navbar = (props) => (
    <nav>
        <div className="nav-wrapper">

            <a className="brand-logo center">User task list</a>
            <ul class="right hide-on-med-and-down">

                <li><Link to='/about'>About</Link></li>

                <li><a onClick={props.handleThisClick}><i class="material-icons">{props.toggleView ? 'view_module' : 'view_list'}</i></a></li>

                <li><a onClick={props.refreshClick}><i class="material-icons">refresh</i></a></li>

            </ul>

        </div>
        <div class="nav-wrapper">
            <form>
                <div class="input-field">
                    <input id="search" type="text" value={props.inputValue} onChange={props.inputTyping} />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        </div>

    </nav>
)

export default Navbar;



