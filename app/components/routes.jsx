"use strict";

//import {Router, Route, IndexRoute, Link} from 'react-router';
const Router = require("react-router").Router;
const Route = require("react-router").Route;
const IndexRoute = require("react-router").IndexRoute;
const Link = require("react-router").Link;
const React = require("react");

import App from './App';
import FrontPage from './FrontPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route path="blog" component={FrontPage} />
    </Route>
);