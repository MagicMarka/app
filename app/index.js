require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('font-awesome/css/font-awesome.css');
require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'font-awesome/css/font-awesome.css';
import './css/style.css';
import App from './App';


ReactDOM.render(<App data='data.json' />, document.getElementById('root'));