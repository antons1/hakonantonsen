"use strict";

import React from "react";
import { Link } from "react-router";
import './PageHeader.less';

import PageContentBox from '../PageContentBox/PageContentBox'

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
            <header className="main-header">
                <PageContentBox>
                <div className="main-header__titles">
                    <h1>Håkon Antonsen</h1>
                    <h4>M. Sc student, full-stack developer</h4>
                </div>
                <span className="hamburger-wrapper">
                    <a className="hamburger-wrapper__hamburger" href="#" onClick={this.toggleMenu}></a>
                </span>
                <nav className="main-nav">
                    <ul className={"main-nav__list" + (this.state.visibleMenu ? " main-nav__list--visible" : "")}>
                        <li className="nav-list-item"><h1><Link to="/cv" className="nav-list-item__link">CV</Link></h1></li>
                        <li className="nav-list-item"><h1><Link to="/about" className="nav-list-item__link">About</Link></h1></li>
                        <li className="nav-list-item"><h1><Link to="/blog" className="nav-list-item__link">Blog</Link></h1></li>
                    </ul>
                </nav>
                </PageContentBox>
            </header>
        );
    }
};

export default PageHeader