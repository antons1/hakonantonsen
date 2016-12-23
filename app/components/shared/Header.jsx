"use strict";

import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            visibleMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
    }

    render() {
        return(
            <header className="padded container main-header">
                <div className="titles">
                    <h1>Håkon Antonsen</h1>
                    <h3>M. Sc student, full-stack developer</h3>
                </div>
                <a className="hamburger" href="#" onClick={this.toggleMenu}></a>
                <nav className="main-nav">
                    <ul className={this.state.visibleMenu ? "visible" : ""}>
                        <li><Link to="/cv">CV</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header
