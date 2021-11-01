//Footer for contact page and other pages that need a footer with a copyright and a link to the home page 
// and a link to the contact page 

import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-left-container">
                            <div className="footer-left-logo">
                                <Link to="/">
                                    <img src={('../images/logo.png')} alt="logo" />
                                </Link>
                            </div>
                            <div className="footer-left-text">
                                <p>
                                    <span>© 2019 ADA SHIPYARD</span>
                                    <span>All Rights Reserved</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-container">
                            <div className="footer-right-text">
                                <p>
                                    <span>
                                        <Link to="/contact">Contact Us</Link>
                                    </span>
                                    <span>
                                        <Link to="/">Home</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;