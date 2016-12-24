"use strict";

import React from 'react';
import Header from "./shared/Header";
import Footer from "./shared/Footer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App
