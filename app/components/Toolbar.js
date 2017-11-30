import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

export default class Toolbar extends React.Component {

    constructor (props, { term, data, update }) {
        super(props);
        this.state = {
            startDate: null
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.term = term;
        this.data = data;
        this.update = update;
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
        const value = e.target.value.toLowerCase();

        const filter = this.data.filter(order => {
            return order.OrderDescription.toLowerCase().includes(value);
        });

        this.update({
            data: filter,
            active: 0,
            term: value
        });

    };

    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row options">
                        <form>
                            <input className="form-control search-options" value={this.term} type="text" placeholder="Описание" onChange={this.searchDescription()} />
                            <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                        {/*<form>*/}
                            {/*<input className="form-control search-options" value={term} type="text" placeholder="Компания" onChange={this.search} />*/}
                            {/*<button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>*/}
                        {/*</form>*/}

                        <form>
                            <select className="form-control">
                                <option disabled selected>Статус</option>
                                <option value="1">Принят</option>
                                <option value="2">В обработке</option>
                                <option value="3">Завершен</option>
                            </select>
                        </form>
                        <form>
                            <input className="form-control search-orders" placeholder="Order №" type="text"/>
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

                        />

                        <DatePicker
                            className='form-control'
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            placeholderText="Дата до"
                            locale="ru"

                        />
                    </div>
                </div>
            </div>
        )
    }
}
