"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ContentArea from './components/ContentArea';
import {Router, Route, Link, IndexRoute} from "react-router";

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="blog" component={ContentArea} />
        </Route>
    </Router>
), document.getElementById('app'));