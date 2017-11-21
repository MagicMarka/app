require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('./css/style.css');
require('./css/theme.css');
require('./css/jsgrid.css');



import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './css/style.css';
import './css/theme.css';
import './css/jsgrid.css';


export default class HelloWorld extends React.Component {
  render() {
    return(<input type="button" className="btn btn-primary" value="Hello World" />);
  }
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);