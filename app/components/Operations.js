import React, { Component } from 'react';
import '../css/style.css';
import load from '../utils/load';
import Toolbar from './Toolbar';
import Table from './Table';
import Top from './Top';

class Operations extends Component {
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
    updateData() {
        load(this.props.data).then(orders => {
            this.initialData = JSON.parse(orders);
            this.setState({
                data: this.initialData
            });
        });
    };




    render() {
        return (
            <div className="operations">
                <Top data={this.state.data} update={this.updateData.bind(this)} />
                <Toolbar term={this.state.term} data={this.initialData} update={this.updateData.bind(this)} />
                <Table data={this.state.data} update={this.updateData.bind(this)} />
            </div>
        );
    }
}

export default Operations;