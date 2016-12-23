"use strict";

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App';
import FrontPage from './FrontPage';

export default (props) =>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="blog" component={FrontPage} />
        </Route>
    </Router>;
