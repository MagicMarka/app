import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

export default class Toolbar extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            startDate: null
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.searchDescription = this.searchDescription.bind(this);
        this.searchOrderNumber = this.searchOrderNumber.bind(this);
        this.searchOrderStatus = this.searchOrderStatus.bind(this);
        this.searchByDates = this.searchByDates.bind(this);
    }

    handleChangeStart(date) {

        this.setState({
            startDate: date,
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    searchDescription(e) {
        let data = this.props.data;
        let value = e.target.value.toLowerCase();

        let filter = data.filter(order => {
            return order.OrderDescription.toLowerCase().includes(value);
        });
        this.props.update({
            data: filter,
            active: 0,
            term: value
        });
    };

    searchOrderNumber(e) {
        let data = this.props.data;
        let value = e.target.value;

        let filter = data.filter(order => {
            return order.OrderNumber.includes(value);
        });
        this.props.update({
            data: filter,
            active: 0,
            term: value
        });
    };

    searchOrderStatus(e) {
        let data = this.props.data;
        let value = e.target.value.toLowerCase();

        let filter = data.filter(order => {
            return order.OrderStatus.toLowerCase().includes(value);
        });
        this.props.update({
            data: filter,
            active: 0,
            term: value
        });
    };

    searchByDates(e) {
        e.preventDefault();
        let data = this.props.data;

        let startDate = this.state.startDate._d;
        let endDate = this.state.endDate._d;
        let formattedStartDate = this.getFormattedDate(startDate);
        let formattedEndDate = this.getFormattedDate(endDate);


        let filter = data.filter(order => {
            return order.OrderDate >= formattedStartDate && order.OrderDate <= formattedEndDate
        });
        this.props.update({
            data: filter,
            active: 0,
            term: formattedStartDate
        });
    };

    getFormattedDate(date) {
        const formattedDate = ('0' + (date.getMonth()+1)).slice(-2) + '/'
            + ('0' + date.getDate()).slice(-2) + '/'
            + date.getFullYear();
        return formattedDate;
    }

    render() {
        return(
            <div className="row">
                <div>{this.data}</div>
                <div className="col-md-12">
                    <div className="row options">
                        <form>
                            <input className="form-control search-options" value={this.term} type="text" placeholder="Описание" onChange={this.searchDescription} />
                            <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                        <form>
                            <select className="form-control" onChange={this.searchOrderStatus}>
                                <option disabled selected>Статус</option>
                                <option value={this.term}>Принят</option>
                                <option value={this.term}>В обработке</option>
                                <option value={this.term}>Завершен</option>
                            </select>
                        </form>
                        <form>
                            <input className="form-control search-options" value={this.term} type="text" placeholder="Номер заказа" onChange={this.searchOrderNumber} />
                            <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>

                        <DatePicker
                            className='form-control'
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            placeholderText="Дата с"
                            locale="ru"
                            dateFormat="MM/DD/YYYY"
                        />
                        <form>

                            <DatePicker
                                className='form-control'
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                placeholderText="Дата до"
                                locale="ru"
                                dateFormat="MM/DD/YYYY"
                            />
                            <button onClick={this.searchByDates} className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}