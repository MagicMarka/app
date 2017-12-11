import React from 'react';
import { Grid, Modal, Row, Button, Popover, Tooltip, InputGroup, Col, FieldGroup, Form, Pagination, ButtonToolbar, ToggleButton, ToggleButtonGroup, FormGroup, ControlLabel, FormControl, OverlayTrigger, ButtonGroup } from 'react-bootstrap';
export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false, active: false, bsStyle: 'default', activePage: 1, sum: '', value: '', payform:'', currency: '', data: '', tax: ''};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePayform = this.handlePayform.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.handleSum = this.handleSum.bind(this);
        this.handleTax = this.handleTax.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    showModal() {
        this.setState({showModal: true});
    }

    hideModal() {
        this.setState({showModal: false});
    }
    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey,
        });
    }
    handlePayform(event) {
        this.setState({payform: event.target.value});
    }
    handleCurrency(event) {
        this.setState({currency: event.target.value});
    }
    handleSum(event) {
        this.setState({sum: event.target.value});
    }
    handleTax(event) {
        this.setState({tax: event.target.value});
    }
    handleText(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        var mainData = this.props.data;
        let orderData = {};
        orderData.OrderAmount = this.state.sum;
        orderData.payform = this.state.payform;
        orderData.currency = this.state.currency;
        orderData.value = this.state.value;
        mainData = mainData.push(orderData);
        this.props.update({
            data: mainData,
        });
        this.setState({
            showModal: false
        });
        console.log(this.props.data)
    }
    render() {
        return (
            <div>
                <div className="row row-broken">
                    <div className="col-sm-4 col-xs-12">
                        <div className="col-inside-lg decor-default chat"  >
                            <div className="chat-list">
                                <h6>Список чатов</h6>
                                <div className="list-item">
                                    <div className="number">Операция № 123-56</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 127-54</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 129-06</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 143-56</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 123-13</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 193-59</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 103-36</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-xs-12 chat" >
                        <div className="col-inside-lg decor-default"  >

                                <h6>Операция № 123-56 </h6>
                                <button className="btn btn-primary btn-rounded" onClick={this.showModal}>Фикс </button>
                                <div className="chat-body"><div className="answer left">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
                                            <div className="status offline"></div>
                                    </div>
                                    <div className="name">Клиент</div>
                                    <div className="text">
                                        Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                                            <div className="status offline"></div>
                                    </div>
                                    <div className="name">Менеджер</div>
                                    <div className="text">
                                        Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer left">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
                                            <div className="status online"></div>
                                    </div>
                                    <div className="name">Клиент</div>
                                    <div className="text">
                                        ...
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                                            <div className="status busy"></div>
                                    </div>
                                    <div className="name">Менеджер</div>
                                    <div className="text">
                                        It is a long established fact that a reader will be. Thanks Mate!
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
                                            <div className="status off"></div>
                                    </div>
                                    <div class="name">Менеджер</div>
                                    <div class="text">
                                        It is a long established fact that a reader will be. Thanks Mate!
                                    </div>
                                    <div class="time">5 min ago</div>
                                </div>
                                <div className="answer left">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                                            <div className="status offline"></div>
                                    </div>
                                    <div className="name">Клиент</div>
                                    <div className="text">
                                        Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
                                            <div className="status offline"></div>
                                    </div>
                                    <div className="name">Менеджер</div>
                                    <div className="text">
                                        Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer left">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                                            <div className="status online"></div>
                                    </div>
                                    <div className="name">Клиент</div>
                                    <div className="text">
                                        ...
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
                                            <div className="status busy"></div>
                                    </div>
                                    <div className="name">Менеджер</div>
                                    <div className="text">
                                        It is a long established fact that a reader will be. Thanks Mate!
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div>
                                <div className="answer right">
                                    <div className="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                                            <div class="status off"></div>
                                    </div>
                                    <div className="name">Клиент</div>
                                    <div className="text">
                                        It is a long established fact that a reader will be. Thanks Mate!
                                    </div>
                                    <div className="time">5 min ago</div>
                                </div></div>
                                <div className="answer-add">
                                    <input placeholder="Ваше сообщение"/>
                                        <span className="answer-btn answer-btn-1"></span>
                                        <span className="answer-btn answer-btn-2"></span>
                                </div>

                        </div>
                    </div>
            </div>
                {/*<Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="main-modal">*/}
                    {/*<Modal.Header>*/}
                        {/*<Modal.Title>Операция № 131/4 от 27.19.2017 </Modal.Title>*/}
                        {/*<span className="close" onClick={this.hideModal}>Закрыть</span>*/}
                    {/*</Modal.Header>*/}
                    {/*<Modal.Body>*/}
                        {/*<Row>*/}
                            {/*<Col md={6}>*/}
                                {/*<div className="block">*/}
                                    {/*<label>Направление операции:</label>*/}
                                    {/*<ButtonToolbar>*/}
                                        {/*<ToggleButtonGroup type="radio" name="options" defaultValue={'give'} >*/}
                                            {/*<ToggleButton className="tt" value={'give'}>Отдаю</ToggleButton>*/}
                                            {/*<ToggleButton className="tt" value={'get'}>Получаю</ToggleButton>*/}
                                            {/*<ToggleButton className="tt" value={'change'}>Обмен</ToggleButton>*/}
                                        {/*</ToggleButtonGroup>*/}
                                    {/*</ButtonToolbar>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<label>Форма оплаты:</label>*/}
                                    {/*<ButtonToolbar>*/}
                                        {/*<ToggleButtonGroup type="radio" name="options" defaultValue={'cash'} payform={this.state.payform} onClick={this.handlePayform}>*/}
                                            {/*<ToggleButton className="half"  value={'cash'}>Нал</ToggleButton>*/}
                                            {/*<ToggleButton className="half"  value={'non-cash'}>Безнал</ToggleButton>*/}
                                        {/*</ToggleButtonGroup>*/}
                                    {/*</ButtonToolbar>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup>*/}
                                        {/*<label>Сумма и валюта платежа*/}
                                            {/*<OverlayTrigger placement="right" overlay={tooltip}><i className="fa fa-info-circle" aria-hidden="true" overlay={tooltip}></i></OverlayTrigger>*/}
                                        {/*</label>*/}
                                        {/*<InputGroup className="sum-group" >*/}
                                            {/*<FormControl id="sum" type="text" sum={this.state.sum} onChange={this.handleSum} ref="sum"/>*/}
                                            {/*<FormControl id="currency" componentClass="select" defaultValue={'uah'} currency={this.state.currency} onClick={this.handleCurrency}>*/}
                                                {/*<option value={'usd'}>USD</option>*/}
                                                {/*<option value={'uah'}>UAH</option>*/}
                                                {/*<option value={'eur'}>EUR</option>*/}
                                            {/*</FormControl>*/}
                                        {/*</InputGroup>*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup controlId="tax">*/}
                                        {/*<label>Налогообложение:</label>*/}
                                        {/*<ButtonToolbar>*/}
                                            {/*<ToggleButtonGroup type="radio" name="tax-options" defaultValue={'at'} tax={this.state.tax} onClick={this.handleTax}>*/}
                                                {/*<ToggleButton className="tt" value={'no-at'}>Без НДС</ToggleButton>*/}
                                                {/*<ToggleButton className="tt"  value={'at'}>НДС</ToggleButton>*/}
                                                {/*<ToggleButton className="tt" value={'vat'}>VAT</ToggleButton>*/}
                                            {/*</ToggleButtonGroup>*/}
                                        {/*</ButtonToolbar>*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup>*/}
                                        {/*<label>Город</label>*/}
                                        {/*<FormControl type="text" value={this.state.value} onChange={this.handleText} />*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup>*/}
                                        {/*<label>Назначение платежа</label>*/}
                                        {/*<FormControl type="text" />*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup>*/}
                                        {/*<label>Введите адрес</label>*/}
                                        {/*<FormControl type="text" />*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}

                            {/*</Col>*/}
                            {/*<Col md={6}>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup controlId="formInlineName">*/}
                                        {/*<label>Тег клиента</label>*/}
                                        {/*<FormControl type="text" placeholder="А101.8" />*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                                {/*<div className="block">*/}
                                    {/*<FormGroup controlId="formControlsTextarea" className="comment-form">*/}
                                        {/*<ControlLabel>Примечание</ControlLabel>*/}
                                        {/*<FormControl componentClass="textarea" placeholder="Текст примечания" />*/}
                                    {/*</FormGroup>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                    {/*</Modal.Body>*/}
                    {/*<Modal.Footer className="footer-modal">*/}
                        {/*<Row>*/}
                            {/*<Button bsStyle="primary" onClick={this.handleSubmit}  ><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>*/}
                            {/*<Button bsStyle="primary"><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>*/}
                        {/*</Row>*/}
                    {/*</Modal.Footer>*/}

                {/*</Modal>*/}
            </div>
        );
    }
}


