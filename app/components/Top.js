import React from 'react';
import { Modal, Row, Button, Popover, Tooltip, OverlayTrigger, Col, FieldGroup, Form, FormGroup, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';

export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    showModal() {
        this.setState({showModal: true});
    }

    hideModal() {
        this.setState({showModal: false});
    }
    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
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
                                <ButtonGroup>
                                    <Button bsStyle="primary">Отдаю</Button>
                                    <Button>Получаю</Button>
                                </ButtonGroup>
                                </div>
                                <div className="button-block">
                                <label>Форма оплаты:</label>
                                <ButtonGroup>
                                    <Button>Нал</Button>
                                    <Button bsStyle="primary">Безнал</Button>
                                </ButtonGroup>
                                </div>
                                <div className="main-form">
                                <FormGroup controlId="sum">
                                    <ControlLabel>Сумма и валюта платежа</ControlLabel>
                                    <FormControl type="text" />
                                </FormGroup>
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    <span>Укажите сумму и валюту платежа</span>
                                </div>
                                <div className="main-form">
                                <FormGroup controlId="placement">
                                    <ControlLabel>Адрес получения
                                        <OverlayTrigger placement="right" overlay={tooltip}>
                                            <i className="fa fa-info-circle tooltip" aria-hidden="true"></i>
                                        </OverlayTrigger>
                                    </ControlLabel>
                                    <FormControl type="text" />
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
                        <Button bsStyle="primary"><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>
                        <Button bsStyle="primary"><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>
                    </Row>
            </Modal.Footer>

            </Modal>
        </div>
     );
}
}


