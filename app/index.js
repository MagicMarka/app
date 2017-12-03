require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('font-awesome/css/font-awesome.css');
require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import './css/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));