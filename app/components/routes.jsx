"use strict";

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App';
import Placeholder from './Placeholder';

export default (props) =>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Placeholder} />
        </Route>
    </Router>;
