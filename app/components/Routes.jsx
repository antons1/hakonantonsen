"use strict";

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './Root';
import FrontPage from './FrontPage';
import CV from './CV';

export default (props) =>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="cv" component={CV} />
        </Route>
    </Router>;
