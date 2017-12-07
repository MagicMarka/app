import React from 'react';
import { Modal, Row, Button, Popover, Tooltip, OverlayTrigger, Col, FieldGroup, Form, Pagination, ButtonToolbar, ToggleButton, ToggleButtonGroup, FormGroup, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import $ from 'jquery';
export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false, active: false, bsStyle: 'default', activePage: 1, sum: '', value: '', payform:'', currency: '' };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePayform = this.handlePayform.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.handleSum = this.handleSum.bind(this);
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
    handleText(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();

        var orderData = {};
        orderData.sum = this.state.sum;
        orderData.payform = this.state.payform;
        orderData.currency = this.state.currency;
        orderData.value = this.state.value;
        var sendingData =  JSON.stringify(orderData);
        $.ajax({
            url: 'http://localhost:4400/data.json',
            type: 'POST',
            data: sendingData,
            contentType: 'application/json'
        })


        console.log(orderData);

    }
    render() {
        const tooltip = (
            <Tooltip id="modal-tooltip">
                Укажиите город для достаки, либо "баланс" для пополнения баланса
            </Tooltip>
        );
	return ( 
		<div className="page-heading">
            <h2>Операции</h2>
            <a href="#" className="btn btn-primary btn-rounded">Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
            <button className="btn btn-primary btn-rounded" onClick={this.showModal}>Новая операция + </button>
            {/*<Pagination*/}
                {/*prev*/}
                {/*next*/}
                {/*first*/}
                {/*last*/}
                {/*ellipsis*/}
                {/*boundaryLinks*/}
                {/*items={20}*/}
                {/*maxButtons={5}*/}
                {/*activePage={this.state.activePage}*/}
                {/*onSelect={this.handleSelect}*/}
            {/*/>*/}
            <form>
                <input className="form-control search-form" placeholder="Поиск" type="text"/><button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="main-modal">
                <Modal.Header>
                    <Modal.Title>Операция № 131/4 от 27.19.2017 </Modal.Title>
                    <span className="close" onClick={this.hideModal}>Закрыть</span>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                            <Col md={6}>
                                <div className="button-block">
                                <label>Направление операции:</label>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup type="radio" name="options" defaultValue={'give'} >
                                            <ToggleButton value={'give'}>Отдаю</ToggleButton>
                                            <ToggleButton value={'get'}>Получаю</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </div>
                                <div className="button-block">
                                <label>Форма оплаты:</label>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup type="radio" name="options" defaultValue={'cash'} payform={this.state.payform} onClick={this.handlePayform}>
                                            <ToggleButton value={'cash'}>Нал</ToggleButton>
                                            <ToggleButton value={'non-cash'}>Безнал</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </div>
                                <div className="main-form">
                                <FormGroup controlId="sum">
                                    <ControlLabel>Сумма и валюта платежа</ControlLabel>
                                    <FormControl type="number" sum={this.state.sum} onChange={this.handleSum} ref="sum"/>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup type="radio" name="options" defaultValue={'uah'} currency={this.state.currency} onClick={this.handleCurrency}>
                                            <ToggleButton value={'usd'}>USD</ToggleButton>
                                            <ToggleButton value={'uah'}>UAH</ToggleButton>
                                            <ToggleButton value={'eur'}>EUR</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </FormGroup>
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    <span>Укажите сумму и валюту платежа</span>
                                </div>
                                <div className="main-form">
                                <FormGroup controlId="placement">
                                    <ControlLabel>Город/на баланс
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                                        </OverlayTrigger>
                                    </ControlLabel>
                                    <FormControl type="text" value={this.state.value} onChange={this.handleText} />
                                </FormGroup>
                                </div>
                                <div className="main-form">
                                <FormGroup controlId="adress">
                                    <ControlLabel>Введите адрес</ControlLabel>
                                    <FormControl type="text" />
                                </FormGroup>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Form inline className="client-tag">
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel>Тег клиента</ControlLabel>
                                        <FormControl type="text" placeholder="А101.8" />
                                    </FormGroup>
                                </Form>
                            <FormGroup controlId="formControlsTextarea" className="comment-form">
                                <ControlLabel>Примечание</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Текст примечания" />
                            </FormGroup>
                            </Col>
                    </Row>
                    </Modal.Body>
            <Modal.Footer className="footer-modal">
                    <Row>
                        <Button bsStyle="primary" onClick={this.handleSubmit}><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>
                        <Button bsStyle="primary"><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>
                    </Row>
            </Modal.Footer>

            </Modal>
        </div>
     );
}
}


