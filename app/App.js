import React, { Component } from 'react';
import './css/style.css';
import Toolbar from './components/Toolbar';
import Table from './components/Table';
import Search from './components/Search';
import load from './utils/load';



class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(orders => {
 this.initialData = JSON.parse(orders);
    this.setState({
      data: this.initialData
    });
  });
  }

  updateData(config) {
    this.setState(config);
  };



    render() {
        return (
            <div className="app">
            <Search term={this.state.term} data={this.initialData} update={this.updateData.bind(this)} />
            	<Toolbar />
            	<Table data={this.state.data} update={this.updateData.bind(this)} />
            </div>
        );
    }
}

export default App;