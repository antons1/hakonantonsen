"use strict";

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
//const Router = require("react-router").Router;
//const Route = require("react-router").Route;
//const IndexRoute = require("react-router").IndexRoute;
//const Link = require("react-router").Link;
//const React = require("react");

import App from './App';
import FrontPage from './FrontPage';

export default (props) =>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="blog" component={FrontPage} />
        </Route>
    </Router>;
