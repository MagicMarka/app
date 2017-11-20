require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
export default class HelloWorld extends React.Component {
  render() {
    return(<input type="button" className="btn btn-primary" value="Hello World" />);
  }
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);