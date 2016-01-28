"use strict";

import React from 'react';
import Header from "./Header";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App
