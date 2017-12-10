import 'rc-calendar/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
    return time ? format : 'YYYY-MM-DD';
}


const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')} />;

function disabledTime(date) {
    console.log('disabledTime', date);
    if (date && (date.date() === 15)) {
        return {
            disabledHours() {
                return [3, 4];
            },
        };
    }
    return {
        disabledHours() {
            return [1, 2];
        },
    };
}


function disabledDate(current) {
    if (!current) {
        // allow empty select
        return false;
    }
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.valueOf() < date.valueOf();  // can not select days before today
}

class NewCalendar extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showTime: true,
            showDateInput: true,
            disabled: false,
            value: props.defaultValue,
            defaultValue: PropTypes.object,
            defaultCalendarValue: PropTypes.object,
        };
        this.onChange = this.onChange.bind(this),
            this.onShowTimeChange = this.onShowTimeChange.bind(this),
        this.onShowDateInputChange = this.onShowDateInputChange.bind(this),
            this.toggleDisabled = this.toggleDisabled.bind(this)
    }

    onChange(value) {
        console.log('DatePicker change: ', (value && value.format(format)));
        this.setState({
            value,
        });
    }

    onShowTimeChange(e) {
        this.setState({
            showTime: e.target.checked,
        });
    }

    onShowDateInputChange(e) {
        this.setState({
            showDateInput: e.target.checked,
        });
    }

    toggleDisabled(){
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        const state = this.state;
        const calendar = (<Calendar
            locale={cn ? zhCN : enUS}
            style={{ zIndex: 1000 }}
            dateInputPlaceholder="please input"
            formatter={getFormat(state.showTime)}
            disabledTime={state.showTime ? disabledTime : null}
            timePicker={state.showTime ? timePickerElement : null}
            defaultValue={this.props.defaultCalendarValue}
            showDateInput={state.showDateInput}
            disabledDate={disabledDate}
        />);
        return ( <Calendar
            showWeekNumber={false}
            locale={cn ? zhCN : enUS}
            defaultValue={now}
            disabledTime={disabledTime}
            showToday
            formatter={getFormat(true)}
            showOk={false}
            timePicker={timePickerElement}
            onChange={onStandaloneChange}
            disabledDate={disabledDate}
            onSelect={onStandaloneSelect}
        />);
    }
}

function onStandaloneSelect(value) {
    console.log('onStandaloneSelect');
    console.log(value && value.format(format));
}

function onStandaloneChange(value) {
    console.log('onStandaloneChange');
    console.log(value && value.format(format));
}

export default NewCalendar;