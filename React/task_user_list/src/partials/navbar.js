import React, { Component } from 'react';
import Toggle from './toggler';

const Navbar = () => (
    <nav>
        <div className="nav-wrapper">
            <a className="brand-logo center">User task list</a>
            <ul class="right hide-on-med-and-down">

                <Toggle />
                <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>



            </ul>
        </div>
    </nav>
)

export default Navbar;



