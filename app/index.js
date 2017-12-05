require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('font-awesome/css/font-awesome.css');
require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import './css/style.css';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router-dom';

const history = createBrowserHistory()

ReactDOM.render((
    <Router history={history}>
        <App />
    </Router>
), document.getElementById('root'));