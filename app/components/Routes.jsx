"use strict";

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './routes/Root';
import FrontPage from './routes/FrontPage';
import CV from './routes/CV';

export default (props) =>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="cv" component={CV} />
        </Route>
    </Router>;
