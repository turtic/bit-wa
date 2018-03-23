import React from 'react';

const Footer = (props) => (

    <footer className="page-footer">
        <div className="container">

        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2018 Copyright Text
            <p className="grey-text text-lighten-4 right" href="#!">  {`Last time refreshed ${Math.floor(props.timer)}sec ago`}</p>
            </div>
        </div>
    </footer>

);

export default Footer;