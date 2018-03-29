"use strict";

import React from 'react';
import PageHeader from './organisms/PageHeader/PageHeader';
import Footer from "./shared/Footer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <PageHeader />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App
