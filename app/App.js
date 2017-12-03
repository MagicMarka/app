import React, { Component } from 'react';
import './css/style.css';
import load from './utils/load';
import Sidebar from './components/Sidebar';
import Main from './components/Main'
import Toolbar from './components/Toolbar';
import Table from './components/Table';
import Top from './components/Top';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                <Main />
            </div>
        );
    }
}

export default App;