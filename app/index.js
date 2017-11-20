require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
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