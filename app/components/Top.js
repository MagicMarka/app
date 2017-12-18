import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Row, Button, Popover, Tooltip, InputGroup, Col, FieldGroup, Form, Pagination, ButtonToolbar, ToggleButton, ToggleButtonGroup, FormGroup, ControlLabel, FormControl, OverlayTrigger, ButtonGroup } from 'react-bootstrap';
export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkvalue: 'get', numChildren: 1, startDate: null, showModal: false, active: false, bsStyle: 'default', activePage: 1, sum: '', value: '', payform:'', currency: '',  tax: '', checked: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePayform = this.handlePayform.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.handleSum = this.handleSum.bind(this);
        this.handleTax = this.handleTax.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChanging = this.handleChanging.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.onAddChild = this.onAddChild.bind(this);
        this.onRemoveChild = this.onRemoveChild .bind(this);
        this.checkValue = this.checkValue.bind(this);

    }
    handleChangeDate(date) {
        this.setState({
            startDate: date
        });
    }
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleChanging() {
        this.setState({
            checked: !this.state.checked
        })
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
    onAddChild() {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
    onRemoveChild() {
        this.setState({
            numChildren: this.state.numChildren - 1
        });
    }
    checkValue(event) {
        this.setState({checkvalue: event.target.value});

    }


    handleSubmit(e) {
        e.preventDefault();
        // var mainData = this.props.data;
        // let orderData = {};
        // orderData.OrderAmount = this.state.sum;
        // orderData.payform = this.state.payform;
        // orderData.currency = this.state.currency;
        // orderData.value = this.state.value;
        // this.props.update({
        //     data: mainData,
        // });
        this.setState({
            showModal: false
        });
    }
    render() {
        const cash = [];
        for (var i = 0; i < this.state.numChildren; i += 1) {
            cash.push(
                    <FormGroup>
                        <InputGroup className="sum-group"  key={i} number={i}>
                            <FormControl id="sum" type="text" sum={this.state.sum} onChange={this.handleSum} ref="sum"/>
                            <FormControl id="currency" componentClass="select" defaultValue={'uah'} currency={this.state.currency} onClick={this.handleCurrency}>
                                <option value={'USD'}>USD</option>
                                <option value={'UAH'}>UAH</option>
                                <option value={'EUR'}>EUR</option>
                                <option value={'GBP'}>GBP</option>
                                <option value={'CAD'}>CAD</option>
                                <option value={'CHF'}>CHF</option>
                                <option value={'SEK'}>SEK</option>
                                <option value={'ESP'}>ESP</option>
                                <option value={'ZAR'}>ZAR</option>
                                <option value={'eur'}>EUR</option>


                            </FormControl>
                        </InputGroup>
                    </FormGroup>);};

        const delivery =  this.state.checked ?  null :
            <div>
                <div className="block">
                    <FormGroup>
                        <label>Куда доставить?</label>
                        <FormControl type="text" />
                    </FormGroup>
                </div>
                <div className="block">
                    <FormGroup>
                        <label>Дата доставки</label>
                        <DatePicker
                            className='form-control'
                            selected={this.state.startDate}
                            popperPlacement="right"
                            startDate={this.state.startDate}
                            onChange={this.handleChangeDate}
                            placeholderText="Укажите дату"
                            locale="ru"
                            dateFormat="MM/DD/YYYY"
                        />
                    </FormGroup>
                </div>
        </div> ;
        const tooltip = (
            <Tooltip id="modal-tooltip">
                Укажите сумму и валюту платежа
            </Tooltip>
        );
        const tax = this.state.checked ?
            <div className="block">
                <div className="block">
                    <FormGroup>
                        <label>Назначение платежа</label>
                        <FormControl type="text" />
                    </FormGroup>
                </div>
                <FormGroup controlId="tax">
                    <label>Налогообложение:</label>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="tax-options" defaultValue={'at'} tax={this.state.tax} onClick={this.handleTax}>
                            <ToggleButton className="tt" value={'no-at'}>Без НДС</ToggleButton>
                            <ToggleButton className="tt"  value={'at'}>НДС</ToggleButton>
                            <ToggleButton className="tt" value={'vat'}>VAT</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </FormGroup>
            </div> : null;
        const main =
                <div>
                <div className="block">
                    <label>Форма оплаты:</label>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={'cash'} payform={this.state.payform} onClick={this.handlePayform}>
                            <ToggleButton className="half"  value={'cash'} onChange={ this.handleChange }>Нал</ToggleButton>
                            <ToggleButton className="half"  value={'non-cash'}  checked={ this.state.checked } onChange={ this.handleChange }>Безнал</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <div className="block">
            <FormGroup>
            <label>Сумма и валюта платежа
        <OverlayTrigger placement="right" overlay={tooltip}><i className="fa fa-info-circle" aria-hidden="true" overlay={tooltip}></i></OverlayTrigger>
        </label>
        <InputGroup className="sum-group" >
            <FormControl id="sum" type="text" sum={this.state.sum} onChange={this.handleSum} ref="sum"/>
            <FormControl id="currency" componentClass="select" defaultValue={'uah'} currency={this.state.currency} onClick={this.handleCurrency}>
                <option value={'USD'}>USD</option>
                <option value={'UAH'}>UAH</option>
                <option value={'EUR'}>EUR</option>
                <option value={'GBP'}>GBP</option>
                <option value={'CAD'}>CAD</option>
                <option value={'CHF'}>CHF</option>
                <option value={'SEK'}>SEK</option>
                <option value={'ESP'}>ESP</option>
                <option value={'ZAR'}>ZAR</option>
                <option value={'eur'}>EUR</option>


            </FormControl>
        </InputGroup>
        </FormGroup>
    </div>
    { tax }
        <div className="block">
            <FormGroup>
                <label>Город</label>
                <FormControl type="text" value={this.state.value} onChange={this.handleText} />
            </FormGroup>
            </div>

            <div className="block">
                <FormGroup>
                    <label>Введите адрес</label>
                    <FormControl type="text" />
                </FormGroup>
            </div> </div>
        const change = <div>
                        <div className="block" addChild={this.onAddChild}>
                            <FormGroup>
                                <label>Отдаю</label>
                                {cash}
                                <Button onClick={this.onAddChild} >Добавить валюту</Button>
                                <Button onClick={this.onRemoveChild} >Удалить валюту</Button>
                            </FormGroup>
                            <FormGroup>
                                <label>Получаю</label>
                                <FormControl id="currency" componentClass="select" defaultValue={'uah'} currency={this.state.currency} onClick={this.handleCurrency}>
                                    <option value={'USD'}>USD</option>
                                    <option value={'UAH'}>UAH</option>
                                    <option value={'EUR'}>EUR</option>
                                    <option value={'GBP'}>GBP</option>
                                    <option value={'CAD'}>CAD</option>
                                    <option value={'CHF'}>CHF</option>
                                    <option value={'SEK'}>SEK</option>
                                    <option value={'ESP'}>ESP</option>
                                    <option value={'ZAR'}>ZAR</option>
                                    <option value={'eur'}>EUR</option>
                                </FormControl>
                            </FormGroup>
                        </div>
                        <div className="block">
            <FormGroup>
            <label>Отдаю (город, страна):</label>
        <FormControl type="text" />
    </FormGroup>
    </div>
                        <div className="block">
            <FormGroup>
                <label>Получаю (город, страна):</label>
                <FormControl type="text" />
            </FormGroup>
        </div>
                        <div className="block">
            <label>Доставка:</label>
        </div>
                        <div className="block">
            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="delivery" defaultValue={'yes'} >
                    <ToggleButton className="half"  value={'yes'} checked={ this.state.checked }  onChange={ this.handleChange }>Да</ToggleButton>
                    <ToggleButton className="half"  value={'no'} checked={ this.state.checked } onChange={ this.handleChange }>Нет</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        </div>
                        {delivery}
                        </div>
        const  content = this.state.checkvalue == 'change' ? change : main;
        return (
        <div>
		<div className="page-heading">
            <h2>Операции</h2>
            <a href="#" className="btn btn-primary btn-rounded">Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
            <button className="btn btn-primary btn-rounded" onClick={this.showModal}>Новая операция + </button>
            <form>
                <input className="form-control search-form" placeholder="Поиск" type="text"/><button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
            <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="main-modal">
                <Modal.Header>
                    <Modal.Title>Операция № 131/4 от 27.19.2017 </Modal.Title>
                    <span className="close" onClick={this.hideModal}>Закрыть</span>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                            <Col md={6}>
                                <div className="block">
                                <label>Направление операции:</label>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup type="radio" name="options"  defaultValue={'give'} >
                                            <ToggleButton className="tt" value={'give'}
                                                          onClick={this.checkValue} >Отдаю</ToggleButton>
                                            <ToggleButton className="tt"  onClick={this.checkValue}  value={'get'} >Получаю</ToggleButton>
                                            <ToggleButton className="tt" checkvalue={this.state.value}   value={'change'}
                                                          onClick={this.checkValue}>Обмен</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </div>
                                {content}
                            </Col>
                            <Col md={6}>
                                <div className="block">
                                    <FormGroup controlId="formInlineName">
                                        <label>Тег клиента</label>
                                        <FormControl type="text" placeholder="А101.8" />
                                    </FormGroup>
                                </div>
                                <div className="block">
                            <FormGroup controlId="formControlsTextarea" className="comment-form">
                                <ControlLabel>Примечание</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Текст примечания" />
                            </FormGroup>
                                </div>
                            </Col>
                    </Row>
                    </Modal.Body>
            <Modal.Footer className="footer-modal">
                    <Row>
                        <Button bsStyle="primary" onClick={this.handleSubmit}  ><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>
                        <Button bsStyle="primary" onClick={this.handleSubmit} ><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>
                    </Row>
            </Modal.Footer>

            </Modal>
        </div>
     );
}
}


