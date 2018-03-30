"use strict";

import React from "react";
import './PageHeader.less';

import PageContentBox from '../PageContentBox/PageContentBox';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';

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
                <NavigationBar
                    links={[
                        { to: "/cv", text: "CV" },
                        { to: "/about", text: "About" },
                        { to: "/blog", text: "Blog" }
                    ]}
                    visible={this.state.visibleMenu} />
                </PageContentBox>
            </header>
        );
    }
};

export default PageHeader