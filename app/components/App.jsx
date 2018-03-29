"use strict";

import React from 'react';
import PageHeader from './organisms/PageHeader/PageHeader';
import PageFooter from './organisms/PageFooter/PageFooter';
import './App.less';

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
                <PageFooter />
            </div>
        );
    }
}

export default App
