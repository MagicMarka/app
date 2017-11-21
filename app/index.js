require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('font-awesome/css/font-awesome.css');
require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'font-awesome/css/font-awesome.css';
import './css/style.css';



export default class HelloWorld extends React.Component {
  render() {
    return(<input type="button" className="btn btn-primary" value="Hello World" />);
  }
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);