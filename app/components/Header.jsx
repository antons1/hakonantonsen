"use strict";

import React from "react";
import {Link} from "react-router";

class Header extends React.Component {
    
    render() {
        return(
            <header className="row" id="top-header">
                <h1 className="col-xs-12 col-lg-4">hakonantonsen.no</h1>
                <nav className="col-xs-12 col-lg-8">
                <ul className="nav nav-pills">
                    <li role="presentation" className="selected"><Link to="/blog">Bloggg</Link></li>
                    <li role="presentation"><a href="#">CV</a></li>
                </ul>
                </nav>    
            </header>
        );
    }
};

export default Header