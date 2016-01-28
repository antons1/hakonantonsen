"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Link, IndexRoute} from "react-router";
import routes from "./components/routes";

ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));