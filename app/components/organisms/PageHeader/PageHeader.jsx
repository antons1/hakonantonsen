"use strict";

import React from "react";
import { Link } from "react-router";
import './PageHeader.less';

class PageHeader extends React.Component {
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
            <header className="padded background container main-header">
                <div className="titles">
                    <h1>Håkon Antonsen</h1>
                    <h4>M. Sc student, full-stack developer</h4>
                </div>
                <span className="hamburger-wrapper">
                    <a className="hamburger" href="#" onClick={this.toggleMenu}></a>
                </span>
                <nav className="main-nav">
                    <ul className={this.state.visibleMenu ? "visible" : ""}>
                        <li><h1><Link to="/cv">CV</Link></h1></li>
                        <li><h1><Link to="/about">About</Link></h1></li>
                        <li><h1><Link to="/blog">Blog</Link></h1></li>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default PageHeader