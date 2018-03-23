import React from 'react';
import { Link } from "react-router-dom";

const Header=()=>(
    <nav>
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">RND BLG</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  </nav>
);
 export default Header;